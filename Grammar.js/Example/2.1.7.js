async function findAndSaveUser(Users){
try {
    let user= await Users.findOne({});
    user.name = 'rockjeon'
    user = await user.save();
    user= await Users.findOne({gender: 'm'})
    //생략
 } catch (error) {
    console.error(error)
 }
}
