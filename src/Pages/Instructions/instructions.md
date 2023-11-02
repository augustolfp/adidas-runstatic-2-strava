# Getting Started

In this page you will find instructions on how to move your running data from adidas runstatic into the strava app.

Without further ado, let's go to the instructions!

---

## 1. Request you Data from Adidas

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

## 2. Create your Strava API

With your data already in hand, now it's time to configure your connection with the Strava API!

<p align="center">
<img src="https://i.imgur.com/NVUshST.png" width="500" />
</p>

<p align="center">
<img src="https://i.imgur.com/Daj3xZO.png" width="500" />
</p>

<p align="center">
<img src="https://i.imgur.com/eyxzIo0.png" width="500" />
</p>

<p align="center">
<img src="https://i.imgur.com/xxULDbB.png" width="500" />
</p>
