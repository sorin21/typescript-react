import uuid from "uuid";

export const addJoke = ({title='', description=''}={}) => ({
  type: 'ADD_JOKE',
  jokes: {
    id: uuid(),
    title,
    description
  }
})