// const authors = [{
//   id: 12,
//   name: 'JK Rowlings',
//   age: 50,
//   books: ['Harry Potter and the Globlet of Fire', 'Harry Potter and the Prisoner of Azkaban']
// }, {
//   id: 15,
//   name: 'George RR Martin',
//   age: 70,
//   books: ['GOT - A dances with dragon']
// }, {
//   id: 21,
//   name: 'Stephen King',
//   age: 60,
//   books: ['Green field']
// }];

// const resolvers = {
//   Query: {
//     authors: () => {
//       // console.log('>>>> return author', authors);
//       return authors;
//     },
//     author: (root, args) => {
//       return authors.find(author => author.age === args.age); // find the first element
//     }
//   }
// };

import mongoose from 'mongoose';
import authorModel from './models/authors';

const resolvers = {
  Query: {
    authors: () => {
      return authorModel.find({});
    },
    author: (root, { id }) => {
      console.log(id);
      return authorModel.findOne({ id });
    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new authorModel({ age, name, books });
      return author.save();
    },
    deleteAuthor: (root, { id }) => {
      return authorModel.remove({ id });
    },
    updateAuthor: (root, { id, name }) => {
      return authorModel.findOneAndUpdate({ id }, { name });
    }
  }
}
export default resolvers;