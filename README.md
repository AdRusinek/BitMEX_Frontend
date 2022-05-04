The graphical user interface was designed using the HTML tag language, ReactJS library and in order to finish the details of the application, the CSS style sheets language was also used.

<p align="center">
    <img src="https://user-images.githubusercontent.com/43619870/166825864-d1846634-7118-48cc-bb25-68777aba0f89.png" alt="alternate text">
</p>
 
- On the above image we can see the form used in the account registration process.

It includes text fields that must be filled in to be able to use the service. The Register button is used to send a request to the server, but before the button can be pressed, it is checked in real time if the **Full Name** field is not empty and contains at least 6 characters. The Email Address (**Username**) field must be a valid email address, validation is carried out here using a specialized regex expression which is a specific string of characters. The **Password** and **Confirm Password** fields must be the same as well as they must be at least 6 characters long. When these conditions are met, the user will be able to send a registration request.

<p align="center">
    <img src="https://user-images.githubusercontent.com/43619870/166826167-b3e8f808-9e70-42f7-a74e-5a17371f835e.png" alt="alternate text">
</p>

The login page form above consists of two text fields and one that requires a number. The Login button can be clicked only after all the fields above it have been filled in. On the client's side, it is validated whether the fields are empty, whether the password and the token are at least 6 characters long. Only then is the query sent to the server.

<p align="center">
    <img src="https://user-images.githubusercontent.com/43619870/166826293-69e8e3c4-7cec-4ff7-b813-ce8e28db608f.png" alt="alternate text">
</p>

After logging in to the application, the user will be presented with a simple and intuitive graphical interface with such elements as:
- The **Add Account** button for adding your BitMEX account using the keys generated on the BitMEX exchange.
- **Add Alert** button, intended to allow the user to set price alerts.


<p align="center">
    <img src="https://user-images.githubusercontent.com/43619870/166827336-18575408-eab3-4627-bf2f-70c27a2cbeec.png" alt="alternate text">
</p>

- The form for adding an account on the BitMEX exchange has been presented above. In one of the fields, user needs to enter the account name and two keys downloaded from the BitMEX exchange. The Add Account button can be clicked only after the user has filled in all the fields. In this Api Key and Secret api key must be at least 20 characters.


<p align="center">
    <img src="https://user-images.githubusercontent.com/43619870/166827549-c0ed52bb-b634-4b49-a64c-1263365b6662.png" alt="alternate text">
</p>

- Another element of the user interface shown above is the form that allows users to add price notifications. The user who wants to set up a notification must provide the price of the cryptocurrency at which he wants the message to be sent to him and can provide its content.

<p align="center">
    <img src="https://user-images.githubusercontent.com/43619870/166827670-f2e11979-cbf6-4d9e-9bef-0a22a9641a57.png" alt="alternate text">
</p>

The main application panel, the graphic representation which is shown above performs the following tasks:
- Provides information relating to orders and positions currently on the market.
- It enables the setting of transactions that will be issued by the application to the exchange after the occurrence of predetermined conditions using the Add Trailing Stop and Add Stop Market buttons.
- It gives the possibility to cancel unrealized transactions in case when the user deems that they are no longer needed.
- In a very easy and intuitive way, you can find out what situation the transaction concerns, in the case of purchase it is marked in green, or
  in the case of sale in red.
