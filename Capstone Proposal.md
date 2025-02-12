# Project Title

The Rock 

## Overview

What is your app? Give a brief description in a couple of sentences.

An interactive visitor guide for Newfoundland.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

Living in a world with a lunatic as president of the country that most Canadians visit for vacation, trying to highlight the great stuff we have in our country that people may not know about.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

Tourists, both Canadian, American and world wide. Anyone looking to learn more about obscure parts of Canada. Anyone that meets a Newfoundlander and says to themselves "How in the hell did that guy end up like that... and what did he just say to me?"

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

As a user, I can get a quick overview about Newfoundland.
As a user, I can easily click around to learn about special places to visit, famous athletes, musicians and actors that come from the province, and photos of the picturesque landscape.
As a user, I can click a sayings randomizer to learn more about the odd way Newfoundlanders speak.
As a user, I can sign the guidebook and give feedback on the site or on Newfoundland in general.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React for the front-end
- Express for the back-end 

- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - express

### APIs

List any external sources of data that will be used in your app.

No external APIs, I looked but none available, so I'll build the JSON files myself.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Home Page 
About Page
Famous People Page
Places Page
Sayings Randomizer
Guidebook

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

Data will be written in JSON files and stored in the Express server.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET/people

```
Response:
```
{
    "id": 1,
    "name:" Alan Doyle,
    "occupation:" musician,
    "history:" paragraph explaining who he is
    "picture:" URL of him

    }

GET/places

```
Response:
```

{
    "id": 1,
    "name": place's name,
    "location": city or area it's located,
    "description": paragraph about the spot,
    "picture": picture of the spot
}

GET/sayings

```
Response:
```

{
    "id": 1,
    "saying_title": Phrase name ex. "How's she cutting?",
    "saying_example": blurb about what it means,
    "saying_used": explain how it would be used in conversation.
    "saying_photo": URL of a photo somewhat related 
}

POST/guidebook

```
Response:
```

{
    "id": 1,
    "name": person's name,
    "location": where they're from,
    "comment": their comment,
}

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

- Create client
    - react project with routes and pages

- Create server
    - express project with routing, and placeholder responses

- Create JSON files for the various pages and create static images folder for photos page

- Start design from a mobile-first approach for all pages

- Work at establishing and linking front to back end to make sure all functionality is working

- Continue on design up the chain to tablet and desktop

- See where things stand and attempt nice to haves if time allows

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

I'm going to start out with an icon of the island of Newfoundland centered in the page as part of the header, with the nav bar vertically spread out underneath. I'll try my best to see if I can make it dynamic where clicking the icon/button would instead drop the nav bar down. I know that would take time, and involve some work but based on the Snaps filter I think I may be able to figure it out.

The other one that came to me recently which I know is outside my scope would be a way to "virtually" Screech someone in. Getting Screeched In is a process for visitors to Newfoundland where they take a shot of Screech rum (which I can say as a native son is AWFUL), kiss a cod fish, and get a certificate attesting to the fact. My idea would be to switch the guidebook to a form where people would enter their details and submit it, and it would create a certificate image for them that they could save. I've already done some searching about the feasbility of this, and I think it would be too much if it's possible at all, but I figured I'd mention all the same.

