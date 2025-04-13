/**
 * @param {import('knex')} knex
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sayings').del();

  // Inserts seed entries
  await knex('sayings').insert([
    {
      saying_title: 'CFA or Come From Away',
      saying_explanation: "A person who isn't from Newfoundland, also the name of a hit broadway play.",
      saying_used: 'George Street is full of Come From Awayers tonight.',
      saying_photo: 'George-Street-Festival.jpg',
    },
    {
      saying_title: "Yes By",
      saying_explanation: "It was originally a short form of boy, but it's actually gender-neutral expression and isn't interchangeable with boy. It can add emphasis to a phrase, or it can be used a catch-all for different things.",
      saying_used: "Did ya hear old Ms. Fitzpatrick passed away? Yes by, sad to hear or Go on by, knows now you're pulling me leg.",
      saying_photo: "Yes-By.jpg"
    },
    {
      saying_title: "Some/Right",
      saying_explanation: "They're used similarly to very, and on a scale, right is more than some.",
      saying_used: "It's some cold out or She's right pretty.",
      saying_photo: "Some-Right.jpg"
    },
    {
      saying_title: "After",
      saying_explanation: "Can sometimes be used instead of have to indicate the past.",
      saying_used: "I'm after buying the wrong lightbulb, now I've gotta go back to the store.",
      saying_photo: "After.jpg"
    },
    {
      saying_title: "Wha?",
      saying_explanation: "Similar to the more widely known and used “eh?” in Canada, Newfoundlanders throw it in to make sure people are paying attention.",
      saying_used: "It's some sunny out today, wha?",
      saying_photo: "Wha.jpg"
    },
    {
      saying_title: "Luh",
      saying_explanation: "It means “Look!”",
      saying_used: "Luh. Missus over there is wearing leggings as pants, shocking.",
      saying_photo: "Luh.jpg"
    },
    {
      saying_title: "Buddy and Missus",
      saying_explanation: "What you would call someone when you don't know their names. Missus can also refer to your female better half.",
      saying_used: "Have a look at buddy on the corner or Missus can ya get me a beer from the fridge.",
      saying_photo: "Buddy-Missus.jpg"
    },
    {
      saying_title: "Rotted/Crooked",
      saying_explanation: "Both can mean annoyed, cranky, or grouchy.",
      saying_used: "It's snowing in April, I'm rotted or What's wrong with you? You're some crooked today.",
      saying_photo: "Rotted-Crooked.jpg"
    },
    {
      saying_title: "Fousty",
      saying_explanation: "Musty or something that smells bad.",
      saying_used: "I left some dirty laundry in a plastic bag and now it's right fousty.",
      saying_photo: "Fousty.jpg"
    },
    {
      saying_title: "Blocked",
      saying_explanation: "Busy, crowded, or packed.",
      saying_used: "We went to the bar, but it was completely blocked. There was a line-up to get in!",
      saying_photo: "Blocked.jpg"
    },
    {
      saying_title: "Stunned",
      saying_explanation: "A way to describe someone experiencing a temporary lack of intelligence or more straightforwardly, dumb.",
      saying_used: "Buddy's some stunned, he left his car running with the keys inside and locked the doors.",
      saying_photo: "Stunned.jpg"
    },
    {
      saying_title: "Skeet",
      saying_explanation: "Most Canadians might say “white trash,” but Newfoundlanders use skeet. Aggressive, uneducated, unruly people usually associated with loitering and petty crimes.",
      saying_used: "Some skeet held up Marie's Mini Mart again last night.",
      saying_photo: "Skeet.jpg"
    },
    {
      saying_title: "Stogged",
      saying_explanation: "Someone who is full after a meal.",
      saying_used: "I'm stogged, I couldn't possibly eat anymore.",
      saying_photo: "Stogged.jpg"
    },
    {
      saying_title: "A Time",
      saying_explanation: "A fun or memorable experience.",
      saying_used: "Man, did we ever have a time last night or Three for Five at the Sundance, now that's a time by!",
      saying_photo: "A-Time.jpg"
    },
    {
      saying_title: "Not Fit/Enough to Drive Ya Cracked",
      saying_explanation: "Exceptionally bad conditions, usually related to weather.",
      saying_used: "It's not fit out today, so it's the perfect time for a Netflix binge or This weather is enough to drive ya cracked.",
      saying_photo: "Not-Fit.jpg"
    },
    {
      saying_title: "Streel",
      saying_explanation: "An unkempt person or a bit of a mess.",
      saying_used: "You're not leaving the house like that, are you? You look like a streel.",
      saying_photo: "Streel.jpg"
    },
    {
      saying_title: "Racket",
      saying_explanation: "A loud noise or commotion.",
      saying_used: "Someone's making some racket out there!",
      saying_photo: "Racket.jpg"
    },
    {
      saying_title: "How ya gettin' on?",
      saying_explanation: "A common greeting that basically means “How's it going?”",
      saying_used: "How ya gettin' on today, by?",
      saying_photo: "Getting-On.jpg"
    },
    {
      saying_title: "Stay where you're at till I comes where you're to",
      saying_explanation: "Basically means wait there for me or stay where you are until I get there.",
      saying_used: "I just off work, I'll get changed quick. Stay where you're at till I comes where you're to.",
      saying_photo: "Stay-Where.jpg"
    },
    {
      saying_title: "Get on the beer",
      saying_explanation: "You're not literally sitting on a case of beer, but you're looking to drink some.",
      saying_used: "It's 5:05 p.m. on a Friday, let's get on the beer!",
      saying_photo: "Get-On-The-Beer.png"
    },
    {
      saying_title: "The arse is gone out of 'er",
      saying_explanation: "Something that has lost its appeal or value.",
      saying_used: "The car's so old, the arse is gone right out of 'er.",
      saying_photo: "Arse-Out.jpg"
    },
    {
      saying_title: "Be there the once",
      saying_explanation: "Basically I'll be right there, as the once means right away or soon.",
      saying_used: "Heading out the door now, be there the once.",
      saying_photo: "The-Once.jpg"
    },
    {
      saying_title: "Whatta ya at?",
      saying_explanation: "'What are you up to?' or 'What are you doing?'. It's also similar to 'How's it going?' and is used as a friendly greeting.",
      saying_used: "Hey there buddy, whatta ya at? A common response would be: This is it.",
      saying_photo: "At.jpg"
    },
    {
      saying_title: "Who knit ya?",
      saying_explanation: "Who are your parents?",
      saying_used: "You're quite the character, who knit ya?",
      saying_photo: "Knit-Ya.jpg"
    },
    {
      saying_title: "Best kind",
      saying_explanation: "Means good or satisfied, can also describe good weather or a good time in general.",
      saying_used: "How ya getting on, by? Best kind.",
      saying_photo: "Best-Kind.jpg"
    },
    {
      saying_title: "I dies at you",
      saying_explanation: "I think you're exceptionally funny.",
      saying_used: "You should be a comedian because I dies at you.",
      saying_photo: "Dies-At.jpg"
    },
    {
      saying_title: "Lord thunderin' Jesus!",
      saying_explanation: "An expression of surprise or disbelief at something a person has just seen, done or heard.",
      saying_used: "Frank just showed up with the beers, lord thunderin' Jesus by about time!",
      saying_photo: "Lord-Thunderin.jpg"
    },
    {
      saying_title: "Long may your big jib draw!",
      saying_explanation: "May you have good fortune for a long time.",
      saying_used: "This one is pretty straightforward, and more of a declaration.",
      saying_photo: "Long-May.jpg"
    },
    {
      saying_title: "Lord liftin'",
      saying_explanation: "An exclamation of surprise or amazement.",
      saying_used: "Lord liftin' old man, is the snow ever coming down outside.",
      saying_photo: "Lord-Liftin.jpg"
    },
    {
      saying_title: "Face on ya like a boiled boot!",
      saying_explanation: "You look unhappy or grumpy.",
      saying_used: "Having a hard day or what, ya got a face on ya like a boiled boot!",
      saying_photo: "Baymen.jpg"
    },
    {
      saying_title: "Deadly",
      saying_explanation: "Really good, almost to the point of being dangerously good.",
      saying_used: "Gonna be 20 degrees out tomorrow in March, that's deadly sure.",
      saying_photo: "Deadly.jpg"
    },
    {
      saying_title: "Loves it",
      saying_explanation: "I love it.",
      saying_used: "The by's just won the ball hockey tournament, loves it.",
      saying_photo: "Loves-It.jpg"
    },
    {
      saying_title: "Shag it",
      saying_explanation: "Basically, forget it.",
      saying_used: "Too cold out today to go for a walk, shag it.",
      saying_photo: "Shag-It.jpg"
    }
  ]);
};