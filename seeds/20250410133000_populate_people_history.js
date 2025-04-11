
exports.seed = function (knex) {

  return knex('people_history').del()
    .then(function () {
      return knex('people_history').insert([
        { person_id: 1, history_text: "Doyle was born on May 17, 1969 in Petty Harbour and is the former front man of the band Great Big Sea." },
        { person_id: 1, history_text: "He's now a solo artist performing around North America with his band." },
        { person_id: 1, history_text: "Doyle also has some acting credits to his name, appearing in a few episodes of the shows Republic of Doyle and Murdoch Mysteries on the CBC, in addition to starring opposite Russell Crowe in 2010's 'Robin Hood'." },
        { person_id: 1, history_text: "In 2018, Doyle was named to the Order of Canada." },

        { person_id: 2, history_text: "Hawco was born on July 28, 1977 on Bell Island." },
        { person_id: 2, history_text: "His career took off with the launch of his own TV series Republic of Doyle." },
        { person_id: 2, history_text: "The show would run for six seasons between 2010 and 2014." },
        { person_id: 2, history_text: "In 2016, Hawco's production company produced the Netflix original series Frontier, where he starred alongside Jason Momoa." },
        { person_id: 2, history_text: "In 2019, Hawco was one of the main cast on the Amazon Prime series Jack Ryan." },

        { person_id: 3, history_text: "Critch was born on May 14, 1974 in St. John's." },
        { person_id: 3, history_text: "He's best known for his work on the comedy series This Hour has 22 Minutes." },
        { person_id: 3, history_text: "Critch originally broke in as a writer, and then became a regular cast member in 2003." },
        { person_id: 3, history_text: "In recent years, Critch has portrayed his late father in the show Son of a Critch on the CBC, which is based on his childhood and teenage years growing up in St. John’s." },

        { person_id: 4, history_text: "Cole was born on June 24, 1933 in St. John's and passed away at the age of 90 on April 24, 2024." },
        { person_id: 4, history_text: "Cole began broadcasting hockey on VOCM radio and CBC Radio in the late 1960s before becoming the lead voice for Hockey Night in Canada on the CBC." },
        { person_id: 4, history_text: "Cole would serve as the lead play-by-play man from 1980 to 2008." },
        { person_id: 4, history_text: "He'd continue broadcasting games until he retired in 2019." },
        { person_id: 4, history_text: "On top of his decorated career as a broadcaster, Cole was also a successful curler." },
        { person_id: 4, history_text: "He was the skip for the Newfoundland team at both the 1971 and 1975 Briers." },

        { person_id: 5, history_text: "Cleary was born on December 18, 1978 in Carbonear but raised in Riverhead, Harbour Grace." },
        { person_id: 5, history_text: "Cleary left home at the age of 15 to play junior hockey in Ontario." },
        { person_id: 5, history_text: "After a successful career in the OHL, he was taken 13th overall by the Chicago Blackhawks in the 1997 NHL Entry Draft." },
        { person_id: 5, history_text: "Cleary would bounce around a few places before landing with the Detroit Red Wings in 2005 after earning a contract following a training camp tryout." },
        { person_id: 5, history_text: "In the 2007-08 season, Cleary would become the first Newfoundlander to ever have his name engraved on the Stanley Cup after the Red Wings defeated the Pittsburgh Penguins." },
        { person_id: 5, history_text: "Cleary retired in 2017, and has been serving as the Red Wings Director of Player Development." },

        { person_id: 6, history_text: "Ryder was born on March 31, 1980 in Bonavista." },
        { person_id: 6, history_text: "He played his junior hockey for the Hull Olympiques of the QMJHL, and in 1998 he was selected in the 8th round of the NHL draft by the Montreal Canadiens." },
        { person_id: 6, history_text: "Ryder made his NHL debut in 2003, and quickly became a consistent goal scorer for the Habs." },
        { person_id: 6, history_text: "In 2008 he signed with the Boston Bruins as a free agent." },
        { person_id: 6, history_text: "Three years later, Ryder would become the second Newfoundlander after Danny Cleary to get his name on the Stanley Cup when the Bruins defeated the Vancouver Canucks in Game 7 of the finals." },
        { person_id: 6, history_text: "Ryder's 237 goals and 484 points in the NHL are records for players born in Newfoundland, making him the province's most successful player to date." },

        { person_id: 7, history_text: "Ryan was born on January 14, 1977 in St. John's but was raised in Mount Pearl." },
        { person_id: 7, history_text: "His father, Terry Senior, played in the OHA and WHA and the younger Ryan would follow in his dad's footsteps by getting into hockey." },
        { person_id: 7, history_text: "He was taken 3rd overall in the WHL draft after playing Junior A in British Columbia." },
        { person_id: 7, history_text: "Following a standout junior career, Ryan was selected 8th overall by the Montreal Canadiens in the 1995 NHL draft." },
        { person_id: 7, history_text: "Despite his high draft status, Ryan would only play eight NHL games over parts of three seasons due to injuries." },
        { person_id: 7, history_text: "Ryan represented Canada in numerous ball hockey tournaments over the years, and found fame again following the publishing of his book Tales of a First Round Nothing in 2014." },
        { person_id: 7, history_text: "In recent years he's also gotten work as an actor, with small roles in Frontier and Schitt's Creek before becoming a leading character on Crave's Shoresy beginning in 2022." },

        { person_id: 8, history_text: "Cochrane was born on May 4, 1973 in Mount Pearl." },
        { person_id: 8, history_text: "Cochrane was a reporter for the CBC's network affiliate in St. John's from 1997 until 2016." },
        { person_id: 8, history_text: "He won a Canadian Screen Award for Best Local News Reportage at the 2nd Canadian Screen Awards in 2014 for his report on a major police drug smuggling investigation in the province." },
        { person_id: 8, history_text: "He joined the network's national parliamentary bureau in Ottawa as a reporter in 2016, and was sometimes seen as a fill-in host of Power & Politics prior to being named the show's permanent host in 2023." },

        { person_id: 9, history_text: "Gushue was born on June 16, 1980 in St. John's." },
        { person_id: 9, history_text: "Gushue was a six-time provincial junior curling champion in his home province of Newfoundland, the last five as skip." },
        { person_id: 9, history_text: "After his outstanding career as a junior, Gushue made an impressive transition into men's curling, and his team quickly became a competitive force." },
        { person_id: 9, history_text: "He won gold at the 2006 Olympics in Turin, a bronze at the 2022 games in Beijing and Gushue also won gold at the 2017 World Championships in Edmonton." },
        { person_id: 9, history_text: "He's a two-time Brier winner representing Newfoundland, a three-time Brier winner representing Team Canada, and also won a Brier in 2022 as a Wild Card." },

        { person_id: 10, history_text: "Mercer was born on October 17, 1969 in St. John's." },
        { person_id: 10, history_text: "Mercer's rise to prominence began in the early 1990s, and in 1992 he began creating This Hour Has 22 Minutes with fellow Newfoundlanders Mary Walsh, Cathy Jones, and Greg Thomey." },
        { person_id: 10, history_text: "Mercer would star on 22 Minutes alongside his cast members, also working on other CBC properties, before the launch of the Rick Mercer Report in 2003." },
        { person_id: 10, history_text: "The satirical politics show featured Rick's Rant, which helped grow the notoriety and popularity of the show." },
        { person_id: 10, history_text: "The Mercer Report would run for 15 successful seasons, airing its final episode in 2018." },
        { person_id: 10, history_text: "Mercer was named to the Order of Canada in 2015." },

        { person_id: 11, history_text: "Furey was born on May 12, 1948 in St. John's." },
        { person_id: 11, history_text: "After spending the early part of his career in education, he earned a law degree from Dalhousie University in 1983 and was called to the Newfoundland Bar in 1984." },
        { person_id: 11, history_text: "Furey was named to the Senate of Canada by Prime Minister Jean Chretien in 1999, and remained in the upper chamber until he retired in May 2023 after turning 75." },
        { person_id: 11, history_text: "He served as the 45th Speaker of the Senate from December 2015 to May 2023." },

        { person_id: 12, history_text: "Tweed was born on March 10, 1957 in St. John's." },
        { person_id: 12, history_text: "She later moved to Saskatoon with her mother and siblings." },
        { person_id: 12, history_text: "Tweed would first find attention competing in the Miss Canada talent competition in 1978, and later posed for Playboy magazine, where she eventually was named Playmate of the Year in 1982." },
        { person_id: 12, history_text: "Tweed also has a deep working history in TV and film." },
        { person_id: 12, history_text: "Later in her career, she'd pay homage to her birthplace with a pair of guest appearances on Republic of Doyle." },
        { person_id: 12, history_text: "In 2011, Tweed married Kiss frontman Gene Simmons after 28 years together." },
      ]);
    });
};