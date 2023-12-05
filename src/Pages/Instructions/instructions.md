# Getting Started

In this page you will find instructions on how to move your running data from adidas runstatic into the strava app.

If you prefer, you can follow this [video tutorial](https://drive.google.com/file/d/1wEhIj0BFXc_ltjJHt4d3FFH-pJ43H-h_/view?usp=sharing).

Without further ado, let's go to the instructions!

---

## 1. Request your Data from Adidas

Go to the [Adidas Runstatic](https://www.runtastic.com/) webpage, Login into your account, and ask for a data export. It may take some days, but you will receive an e-mail telling your Data is ready for download.

Once you've received the email, access their platform and download the compressed file:

<p align="center">
<img src="https://i.imgur.com/BgDP4sP.png" alt="Adidas dashboard for Data download" title="Adidas dashboard for Data download" />
</p>

<br/>

Now, extract the compressed file. You should find the following directory tree:

```bash
└── receivedFile
    ├── Challenges
    │   ├── Collaboration_challenge
    │   │   └── 384f615e-6f4d-4622-bbb9-b351f1160981.json
    │   └── Status
    │       └── 2023-05-30_20-17-37-UTC_dfcc20b4-bc15-449c-b40e-ff41a14b7e3c.json
    ├── data_information.pdf
    ├── Datenauskunft.pdf
    ├── Goals
    │   └── 2022-01-09_21-34-14-UTC_3f529448-82e3-4f17-9e3f-2ffea1e51024.json
    ├── Privacy-settings
    │   ├── 2417734337.json
    │   ├── 2417734338.json
    │   ├── 2417734339.json
    │   ├── 2417734340.json
    │   ├── ...
    │   └── Marketing-consent
    │       ├── 2022-01-09_21-33-34-UTC_173493988.json
    │       └── 2022-01-09_21-33-34-UTC_173493989.json
    ├── Social-connections
    │   ├── Followers
    │   │   └── social_connection.json
    │   ├── Following
    │   │   └── social_connection.json
    │   └── Pending-follow-requests
    │       └── social_connection.json
    ├── Sport-sessions
    │   ├── 2022-01-09_21-34-29-UTC_6a67fb11-e0b0-44ee-b755-4ef8bc409455.json
    │   ├── 2022-01-12_21-47-01-UTC_7533214f-1324-4ed7-a98d-16a8f457c0d6.json
    │   ├── 2022-01-14_21-26-39-UTC_ef734b40-06fb-4775-85cc-0a07a5d45f28.json
    │   ├── ...
    │   ├── Elevation-data
    │   │   ├── 2022-01-09_21-34-29-UTC_6a67fb11-e0b0-44ee-b755-4ef8bc409455.json
    │   │   ├── 2022-01-12_21-47-01-UTC_7533214f-1324-4ed7-a98d-16a8f457c0d6.json
    │   │   ├── 2022-01-14_21-26-39-UTC_ef734b40-06fb-4775-85cc-0a07a5d45f28.json
    │   │   ├── ...
    │   └── GPS-data
    │       ├── 2022-01-09_21-34-29-UTC_6a67fb11-e0b0-44ee-b755-4ef8bc409455.gpx
    │       ├── 2022-01-09_21-34-29-UTC_6a67fb11-e0b0-44ee-b755-4ef8bc409455.json
    │       ├── 2022-01-12_21-47-01-UTC_7533214f-1324-4ed7-a98d-16a8f457c0d6.gpx
    │       ├── 2022-01-12_21-47-01-UTC_7533214f-1324-4ed7-a98d-16a8f457c0d6.json
    │       ├── 2022-01-14_21-26-39-UTC_ef734b40-06fb-4775-85cc-0a07a5d45f28.gpx
    │       ├── 2022-01-14_21-26-39-UTC_ef734b40-06fb-4775-85cc-0a07a5d45f28.json
    │       ├── ...
    ├── User
    │   ├── 2022-01-09_21-33-10-UTC_6ZIFHCR6L9AOKCMO.json
    │   ├── Avatars
    │   │   └── 2023-07-06_04-49-52-UTC_163855041.jpg
    │   ├── Shoes
    │   │   └── 2023-02-17_00-19-12-UTC_63eec800b9212f06262c6cad.json
    │   ├── user_account.json
    │   └── user_preferences.json
    ├── User-Connections
    │   └── Adidas
    │       └── 2023-10-19_02-15-29-UTC_516863b7-8c5a-47b3-98da-86d03c35c406.json
    └── User-Events
        └── 3d192b11-ad0c-46a4-9ef3-aec00fa72882.zip

```

<br/>

As you can see from the directory tree, there is a lot of info in this compressed file. But for this tutorial, you will only need the GPS Data acquired from your Sport sessions. It's a list of **.gpx** files, found in the path below:

```bash
> receivedFile/Sport-sessions/GPS-data/
```

<br/>

## 2. Create your Strava API

With your data already in hand, now it's time to configure your connection with the Strava API!

Go to the [Strava developers page](https://developers.strava.com/) and click on **Create & Manage Your App**. You will be redirected to a form. Fill this form with the following parameters, and click on **Create**:

**Make sure to fill the _Authorization Callback Domain_ exactly as shown in the picture below:**

<p align="center">
<img src="https://i.imgur.com/NVUshST.png" alt="API creation form" title="API creation form" />
</p>

<br/>

You will be prompted to Upload an App Icon for your API. Any picture will work:

<p align="center">
<img src="https://i.imgur.com/Daj3xZO.png" alt="Upload API icon" title="Upload API icon" />
</p>

<p align="center">
<img src="https://i.imgur.com/eyxzIo0.png" alt="I chose a kitty as my API icon" title="I chose a kitty as my API icon" />
</p>

<br/>

Now you have a credentials panel, with all the necessary data to proceed with the Data import:

**As you can see on your API panel, there is a Rate limit of 200 requests every 15 minutes, and 2000 requests daily:**

<p align="center">
<img src="https://i.imgur.com/xxULDbB.png" alt="API Application panel" title="API Application panel" />
</p>

<br/>

## 3. Get Authorization

Go to the [Adidas Runstatic 2 Strava tool page](https://adidas-runstatic-2-strava.vercel.app/upload-tool), and fill the form with your **Client ID** and **Client Secret** (obtained from the last step), and click on the link to get your code:

<p align="center">
<img src="https://i.imgur.com/16dM2tf.png" alt="Import tool credentials forms" title="Import tool credentials form" />
</p>

<br/>

The Strava service will ask for your authorization. Click in _Authorize_:

<p align="center">
<img src="https://i.imgur.com/ZYCO4aE.png" alt="Authorization page" title="Authorization page" />
</p>

<br/>

You will be redirected to a page containing the One-time use Strava Code:

<p align="center">
<img src="https://i.imgur.com/CYEeLkH.png" alt="One-time use Code" title="One-time use Code" />
</p>

Copy the code, go back to the main page, and paste it on its field. Now click in **SEND TOKEN REQUEST**:

<p align="center">
<img src="https://i.imgur.com/Jm7gy3L.png" alt="Token Request form properly filled" title="Token Request form properly filled" />
</p>

<br/>

Now you have an Access token with the required permissions to Upload the files:

<p align="center">
<img src="https://i.imgur.com/sKEsh76.png" alt="Access Token fully generated" title="Access Token fully generated" />
</p>

Do not close the page, just go the the next section!

<br/>

## 4. Upload your files to Strava

With your data in hand, API configured and Access Token generated, it's time to upload your **.gpx** files to strava. Select your files and click in **SEND**:

**Don't forget: there is a Rate limit of 200 requests every 15 minutes, and 2000 requests daily. Select only a maximum of 200 files every each 15 minutes!**

<p align="center">
<img src="https://i.imgur.com/BWE3tWI.png" alt="GPX files selector" title="GPX files selector" />
</p>

<br/>

You should see the list of results, and its statuses:

<p align="center">
<img src="https://i.imgur.com/ujCYdQ9.png" alt="Successful Upload" title="Successful Upload" />
</p>

<br/>

That's it! Check your Strava account on your phone or PC, and you will see all your Upload sessions!
