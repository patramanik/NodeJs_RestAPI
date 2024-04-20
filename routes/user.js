const express = require("express");
const { 
    hendleGatAllUsers, 
    hendleGetUserById,
    hendleCreateUser,
    hendleUpdateUserById,
    hendleDeleteUserById, 
    } = require("../controllers/user");
const router = express.Router();

// router.get("/users", async (req, res) => {
//     try {
//       const allUsers = await User.find({});
//       const html = `
//         <ul>
//           ${allUsers.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
//         </ul>
//       `;
//       res.send(html);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });

router.get("/", hendleGatAllUsers);

// app.get("/api/users/:id", async(req, res) => {
//   const user = await User.findById(req.params.id);
//   if(!user) return res.status(404).json({error: 'User not found'});
//   return res.json(user);
// });

router.get("/:id", hendleGetUserById);

router.post("/", hendleCreateUser);

router.patch("/:id", hendleUpdateUserById);

router.delete("/:id", hendleDeleteUserById);

module.exports = router;
