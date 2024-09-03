import React, { useState } from "react";
import '../css/CheckOut.css'

function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    wilaya: "",
    commune: "",
    address: "",
    phone: "",
    email: "",
  });

  const wilayas = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M’Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arreridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label>Nom et Prénom:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Pays:</label>
        <input type="text" name="country" value="Algérie" readOnly />
      </div>
      <div className="form-group">
        <label>Wilaya:</label>
        <select
          name="wilaya"
          value={formData.wilaya}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionner une wilaya</option>
          {wilayas.map((wilaya, index) => (
            <option key={index} value={wilaya}>
              {wilaya}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Commune:</label>
        <input
          type="text"
          name="commune"
          value={formData.commune}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Adresse:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Téléphone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Soumettre
      </button>
    </form>
  );
}

export default CheckoutForm;
