
export default handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };