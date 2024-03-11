'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

function validate(val) {
  return !val || val.trim() === '';
}

export async function shareMeal(preValue, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    validate(meal.title) ||
    validate(meal.summary) ||
    validate(meal.instructions) ||
    validate(meal.creator) ||
    validate(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: 'Invalid or Empty Input fields' };
  }

  await saveMeal(meal);
  redirect('/meals');
}
