export const getTestController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      Message: "Test Controller Working",
    });
  } catch (error) {
    console.log(error);
  }
};
