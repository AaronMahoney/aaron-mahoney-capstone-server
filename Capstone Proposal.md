# Project Title

The Rock 

## Overview

An interactive visitor guide for Newfoundland.

### Problem Space

Living in a world with a lunatic as president of the country that most Canadians visit for vacation, trying to highlight the great stuff we have in our country that people may not know about.

### User Profile

Tourists, both Canadian, American and world wide. Anyone looking to learn more about obscure parts of Canada. Anyone that meets a Newfoundlander and says to themselves "How in the hell did that guy end up like that... and what did he just say to me?"

### Features

As a user, I can get a quick overview about Newfoundland.

As a user, I can easily click around to learn about special places to visit, famous athletes, musicians and actors that come from the province, and photos of the picturesque landscape.

As a user, I can click a sayings randomizer to learn more about the odd way Newfoundlanders speak.

As a user, I can sign the guidebook and give feedback on the site or on Newfoundland in general.

## Implementation

### Tech Stack

- React for the front-end
- Express for the back-end 

- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - express

### APIs

No external APIs, I looked but none available, so I'll build the JSON files myself.

### Sitemap

Home Page 
About Page (quick blurb with a Newfoundland overview)
Famous People Page (musicians, athletes, actors)
Places Page (places to see/visit for tourists)
Sayings Randomizer (click a button, get a Newfie phrase at random)
Guidebook (leave comments/feedback)

### Mockups

Will attach my sketches to the submission in Synapse (they're not great but should give a gist of what I'm going for visually)

### Data

Data will be written in JSON files and stored in the Express server.

people.json
places.json
sayings.json

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET/people
GET/people/:id

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
GET/places/:id

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

- Create server (sort of started just to connect git repo)
    - express project with routing, and placeholder responses

- Create client
    - react project with routes and pages

- Create JSON files for the various pages and create static images folder for photos page

- Start design from a mobile-first approach for all pages

- Work at establishing and linking front to back end to make sure all functionality is working

- Continue on design up the chain to tablet and desktop

- See where things stand and attempt nice to haves if time allows

---

## Future Implementations

I'm going to start out with an icon of the island of Newfoundland centered in the page as part of the header, with the nav bar vertically spread out underneath. I'll try my best to see if I can make it dynamic where clicking the icon/button would instead drop the nav bar down. I know that would take time, and involve some work but based on the Snaps filter I think I may be able to figure it out.

The other one that came to me recently which I know is outside my scope would be a way to "virtually" Screech someone in. Getting Screeched In is a process for visitors to Newfoundland where they take a shot of Screech rum (which I can say as a native son is AWFUL), kiss a cod fish, and get a certificate attesting to the fact. My idea would be to switch the guidebook to a form where people would enter their details and submit it, and it would create a certificate image for them that they could save. I've already done some searching about the feasbility of this, and I think it would be too much if it's possible at all, but I figured I'd mention all the same.

