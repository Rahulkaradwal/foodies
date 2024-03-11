import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export function getMeals() {
  return db.prepare('Select * from meals').all();
}

export function getMeal(slug) {
  return db.prepare('Select * from meals where slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  // Remove the extraneous space in the fileName.
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  const buffer = Buffer.from(bufferedImage);

  // Await the completion of the image saving process.
  await new Promise((resolve, reject) => {
    stream.write(buffer, (error) => {
      if (error) {
        console.error('Error saving the image:', error);
        stream.close();
        reject(new Error('Saving image failed!'));
      } else {
        stream.on('finish', resolve);
        stream.end();
      }
    });
  });

  // Update the meal image path for the database.
  meal.image = `/images/${fileName}`;

  // Insert the meal data into the database.
  db.prepare(
    `
    INSERT INTO meals (
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    ) VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `
  ).run(meal);
}
