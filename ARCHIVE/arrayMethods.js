const handleDeleteVehicle = (data) => {
  Modal.confirm({
    title: "Are you sure,you want to delete this?",
    okText: "Yes",
    centered: true,
    okType: "danger",
    onOk: async () => {
      const newVehicleData = vehicleData.filter((item) => item.key != data.key);
      setVehicleData(newVehicleData);
      message.success("Vehicle deleted successfully");
    },
  });
};

const onDeleteService = (index) => {
  Modal.confirm({
    title: "Are you sure,you want to delete this service ?",
    okText: "Yes",
    okType: "danger",
    onOk: async () => {
      if (index >= 0) {
        let updatedService = [...serviceDetails];
        updatedService.splice(index, 1);
        calculateSubTotal(updatedService, shopSuppliesDetails);
        setServiceDetails(updatedService);

        console.log("sup updatedService", updatedService);
      }
    },
  });
};
