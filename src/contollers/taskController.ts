import { Controller } from '../utils/controllerWr';

export const addTaskCtrl: Controller = async (req, res) => {
  const data = req.body;
  //   const userID = req.user;
  console.log(data);
  //   console.log(userID._id);
  //   const favorite = await addFavorite(userID._id, data);
  res.status(201).json({
    status: 201,
    message: 'Successfully added favorite',
    // data: favorite,
  });
};
