let searchQuotes = [
	{
		title: "The Seventh Generation Principle",
		date: "",
    url: "quotes/the-seventh-generation-principle.html",
		content: "In our every deliberation we must consider the impact of our decisions on the next seven generations    "
	},
	{
		title: "A law against private jets",
		date: "09 Apr 2019",
    url: "quotes/a-law-against-private-jets.html",
		content: "If I were queen of the world I would pass a law against private jets because they enable you to get around a certain reality You don t have to go through an airport terminal you don t have to interact you don t have to be patient you don t have to be uncomfortable These are the things that remind us we re human Abigail Disney American documentary film producer, philanthropist, and social activist The Cut Podcast "
	},
	{
		title: "The legitimate object of government",
		date: "1854",
    url: "quotes/the-legitimate-object-of-government.html",
		content: "The legitimate object of government is to do for a community of people whatever they need to have done but can not do at all or can not so well do for themselves in their separate and individual capacities In all that the people can individually do as well for themselves government ought not to interfere The desirable things which the individuals of a people can not do or can not well do for themselves fall into two classes those which have relation to wrongs and those which have not Each of these branch off into an infinite variety of subdivisions The first that in relation to wrongs embraces all crimes misdemeanors and nonperformance of contracts The other embraces all which in its nature and without wrong requires combined action as public roads and highways public schools charities pauperism orphanage estates of the deceased and the machinery of government itself From this it appears that if all men were just there still would be some though not so much need for government Abraham Lincoln American statesman and lawyer Fragment on Government "
	},
	{
		title: "Discoveries and Inventions",
		date: "1858",
    url: "quotes/discoveries-and-inventions.html",
		content: "Beavers build houses but they build them in nowise differently or better now than they did five thousand years ago Man is not the only animal who labors but he is the only one who improves his workmanship These improvements he effects by Discoveries and Inventions Abraham Lincoln American statesman and lawyer Lecture on Discoveries and Inventions "
	},
	{
		title: "The better angels of our nature",
		date: "1861",
    url: "quotes/the-better-angels-of-our-nature.html",
		content: "We are not enemies but friends We must not be enemies Though passion may have strained it must not break our bonds of affection The mystic chords of memory stretching from every battlefield and patriot grave to every living heart and hearthstone all over this broad land will yet swell the chorus of the Union when again touched as surely they will be by the better angels of our nature Abraham Lincoln American statesman and lawyer First Inaugral Address "
	},
	{
		title: "Labor is the Superior of Capital",
		date: "Dec. 3, 1861",
    url: "quotes/labor-is-the-superior-of-capital.html",
		content: "Labor is prior to and independent of capital Capital is only the fruit of labor and could never have existed if labor had not first existed Labor is the superior of capital and deserves much the higher consideration Abraham Lincoln American statesman and lawyer Speech to Congress "
	},
	{
		title: "Absorption in something outside us",
		date: "2024",
    url: "quotes/absorption-in-something-outside-us.html",
		content: "Genuine happiness is always rooted in absorption in something outside us and begins in accomplishment undertaken for its own sake and pursued to its own odd and buzzing ends Adam Gopnik American writer and essayist All That Happiness Is "
	},
	{
		title: "Human psychology will never be fully explained",
		date: "2024",
    url: "quotes/human-psychology-will-never-be-fully-explained.html",
		content: "It s all the reasons why human psychology will never be fully explained or pictured by scientific investigation there are just too many variables too many vectors pressing in on every incident It s the reason why storytelling and songwriting and poetry making will always be so much more effective organizers and vehicles of our experience than studies in social science Adam Gopnik American writer and essayist All That Happiness Is "
	},
	{
		title: "Computer Errors",
		date: "1968",
    url: "quotes/computer-errors.html",
		content: "I know there s a proverb which says To err is human but a human error is nothing to what a computer can do if it tries Agatha Christie  Halloween Party "
	},
	{
		title: "Simple things should be simple, complex things should be possible",
		date: "",
    url: "quotes/simple-things-should-be-simple-complex-things-should-be-possible.html",
		content: "Simple things should be simple complex things should be possible Alan Kay American computer scientist Parc discussions with Alan Kay "
	},
	{
		title: "The best way to predict the future is to invent it",
		date: "1971",
    url: "quotes/the-best-way-to-predict-the-future-is-to-invent-it.html",
		content: "Don t worry about what anybody else is going to do The best way to predict the future is to invent it Really smart people with reasonable funding can do just about anything that doesn t violate too many of Newton s Laws Alan Kay American computer scientist Meeting of the Palo Alto Research Center "
	},
	{
		title: "We are idealists and we are realists",
		date: "2018",
    url: "quotes/we-are-idealists-and-we-are-realists.html",
		content: "We are idealists and we are realists We are dreamers and we are builders We are experiencers and we are experimenters We long for certainties yet we ourselves are full of the ambiguities of the Mona Lisa and the I Ching We ourselves are a part of the yin yang of the world Alan Lightman American physicist, writer, and social entrepreneur Searching for Stars on an Island in Maine "
	},
	{
		title: "Work, Soul and Life",
		date: "",
    url: "quotes/work-soul-and-life.html",
		content: "Without work all life goes rotten But when work is soulless life stifles and dies Albert Camus French philosopher, author, and journalist unknown "
	},
	{
		title: "The evil in the world comes almost always from ignorance",
		date: "1947",
    url: "quotes/the-evil-in-the-world-comes-almost-always-from-ignorance.html",
		content: "The evil in the world comes almost always from ignorance and goodwill can cause as much damage as ill will if it is not enlightened There is no true goodness or fine love without the greatest possible degree of clear sightedness Albert Camus French philosopher, author, and journalist The Plague "
	},
	{
		title: "An Invincible Summer",
		date: "1952",
    url: "quotes/an-invincible-summer.html",
		content: "In the depths of winter I finally learned that within me there lay an invincible summer Albert Camus French philosopher, author, and journalist Lyrical and Critical Essays "
	},
	{
		title: "Simplicity and Complexity",
		date: "",
    url: "quotes/simplicity-and-complexity.html",
		content: "Everything should be made as simple as possible but no simpler Albert Einstein German-born theoretical physicist unknown "
	},
	{
		title: "A Happy Man",
		date: "1896-09-18",
    url: "quotes/a-happy-man.html",
		content: "A happy man is too satisfied with the present to dwell too much on the future Albert Einstein German-born theoretical physicist The Collected Papers of Albert Einstein "
	},
	{
		title: "Only a Human Being",
		date: "18 September 1896",
    url: "quotes/only-a-human-being.html",
		content: "I am by heritage a Jew by citizenship a Swiss and by makeup a human being and <em>only< em> a human being without any special attachment to any state or national entity whatsoever Albert Einstein German-born theoretical physicist The Collected Papers of Albert Einstein "
	},
	{
		title: "Moral Religion",
		date: "1930",
    url: "quotes/moral-religion.html",
		content: "The Jewish scriptures admirably illustrate the development from the religion of fear to moral religion a development continued in the New Testament The religions of all civilized peoples especially the peoples of the Orient are primarily moral religions The development from a religion of fear to moral religion is a great step in peoples lives And yet that primitive religions are based entirely on fear and the religions of civilized peoples purely on morality is a prejudice against which we must be on our guard The truth is that all religions are a varying blend of both types with this differentiation that on the higher levels of social life the religion of morality predominates Albert Einstein German-born theoretical physicist Religion and Science "
	},
	{
		title: "This Highest Kind of Religious Feeling",
		date: "1930",
    url: "quotes/this-highest-kind-of-religious-feeling.html",
		content: "The beginnings of cosmic religious feeling already appear at an early stage of development e g in many of the Psalms of David and in some of the Prophets Buddhism as we have learned especially from the wonderful writings of Schopenhauer contains a much stronger element of this The religious geniuses of all ages have been distinguished by this kind of religious feeling which knows no dogma and no God conceived in man s image so that there can be no church whose central teachings are based on it Hence it is precisely among the heretics of every age that we find men who were filled with this highest kind of religious feeling and were in many cases regarded by their contemporaries as atheists sometimes also as saints Albert Einstein German-born theoretical physicist Religion and Science "
	},
	{
		title: "The Supreme Goal of All Theory",
		date: "1933",
    url: "quotes/the-supreme-goal-of-all-theory.html",
		content: "It can scarcely be denied that the supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience Albert Einstein German-born theoretical physicist On the Method of Theoretical Physics "
	},
	{
		title: "Violent Opposition from Mediocre Minds",
		date: "1940-03-19",
    url: "quotes/violent-opposition-from-mediocre-minds.html",
		content: "Great spirits have always encountered violent opposition from mediocre minds The mediocre mind is incapable of understanding the man who refuses to bow blindly to conventional prejudices and chooses instead to express his opinions courageously and honestly Albert Einstein German-born theoretical physicist to Morris Raphael Cohen, professor emeritus of philosophy at the College of the City of New York "
	},
	{
		title: "The Mysterious",
		date: "1949",
    url: "quotes/the-mysterious.html",
		content: "The most beautiful experience we can have is the mysterious It is the fundamental emotion that stands at the cradle of true art and true science Whoever does not know it and can no longer wonder no longer marvel is as good as dead and his eyes are dimmed It was the experience of mystery even if mixed with fear that engendered religion A knowledge of the existence of something we cannot penetrate our perceptions of the profoundest reason and the most radiant beauty which only in their most primitive forms are accessible to our minds it is this knowledge and this emotion that constitute true religiosity In this sense and only this sense I am a deeply religious man Albert Einstein German-born theoretical physicist The World As I See It "
	},
	{
		title: "To Give in the Same Measure",
		date: "1949",
    url: "quotes/to-give-in-the-same-measure.html",
		content: "How strange is the lot of us mortals Each of us is here for a brief sojourn for what purpose he knows not though he sometimes thinks he senses it But without deeper reflection one knows from daily life that one exists for other people first of all for those upon whose smiles and well being our own happiness is wholly dependent and then for the many unknown to us to whose destinies we are bound by the ties of sympathy A hundred times every day I remind myself that my inner and outer life are based on the labors of other men living and dead and that I must exert myself in order to give in the same measure as I have received and am still receiving Albert Einstein German-born theoretical physicist The World As I See It "
	},
	{
		title: "Those who tolerate or encourage evil",
		date: "1953-03-30",
    url: "quotes/those-who-tolerate-or-encourage-evil.html",
		content: "The world is in greater peril from those who tolerate or encourage evil than from those who actually commit it Albert Einstein German-born theoretical physicist Tribute to Pablo Casals "
	},
	{
		title: "The Eternal Struggle for Human Rights",
		date: "1954-02-20",
    url: "quotes/the-eternal-struggle-for-human-rights.html",
		content: "The existence and validity of human rights are not written in the stars The ideals concerning the conduct of men toward each other and the desirable structure of the community have been conceived and taught by enlightened individuals in the course of history Those ideals and convictions which resulted from historical experience from the craving for beauty and harmony have been readily accepted in theory by man and at all times have been trampled upon by the same people under the pressure of their animal instincts A large part of history is therefore replete with the struggle for those human rights an eternal struggle in which a final victory can never be won But to tire in that struggle would mean the ruin of society Albert Einstein German-born theoretical physicist Address to the Chicago Decalogue Society "
	},
	{
		title: "A Man of Value",
		date: "1955-05-02",
    url: "quotes/a-man-of-value.html",
		content: "Try to become not a man of success but try rather to become a man of value Albert Einstein German-born theoretical physicist Life Magazine "
	},
	{
		title: "Small and Obscure Deeds",
		date: "2002",
    url: "quotes/small-and-obscure-deeds.html",
		content: "Of all the will toward the ideal in mankind only a small part can manifest itself in public action All the rest of this force must be content with small and obscure deeds The sum of these however is a thousand times stronger than the acts of those who receive wide public recognition The latter compared to the former are like the foam on the waves of a deep ocean Albert Schweitzer Alsatian theologian, organist, writer, humanitarian, philosopher, and physician Leading Quietly: An Unorthodox Guide to Doing the Right Thing "
	},
	{
		title: "All children of our Earth",
		date: "",
    url: "quotes/all-children-of-our-earth.html",
		content: "We were flying over America and suddenly I saw snow the first snow we ever saw from orbit I have never visited America but I imagined that the arrival of autumn and winter is the same there as in other places and the process of getting ready for them is the same And then it struck me that we are all children of our Earth Aleksandr Aleksandrov Greek-American sociologist and physician Blueprint: The Evolutionary Origins of a Good Society "
	},
	{
		title: "No person in America should be too poor to live",
		date: "28 Jun 2018",
    url: "quotes/no-person-in-america-should-be-too-poor-to-live.html",
		content: "For me democratic socialism is about really the value for me is that I believe that in a modern moral and wealthy society no person in America should be too poor to live Alexandria Ocasio-Cortez American politician and activist Stephen Colbert Show "
	},
	{
		title: "The exercise of the intellect",
		date: "1835",
    url: "quotes/the-exercise-of-the-intellect.html",
		content: "From the time when the exercise of the intellect became a source of strength and of wealth we see that every addition to science every fresh truth and every new idea became a germ of power placed within the reach of the people Alexis de Tocqueville French aristocrat, diplomat, political scientist, political philosopher and historian Democracy in America "
	},
	{
		title: "The Art of Progress",
		date: "",
    url: "quotes/the-art-of-progress.html",
		content: "The art of progress is to preserve order amid change and to preserve change amid order Alfred North Whitehead English mathematician and philosopher unknown "
	},
	{
		title: "The wonder remains",
		date: "1938",
    url: "quotes/the-wonder-remains.html",
		content: "Philosophy begins in wonder And at the end when philosophic thought has done its best the wonder remains Alfred North Whitehead English mathematician and philosopher Modes of Thought "
	},
	{
		title: "Words that are empowered that make your hair stand on end",
		date: "2005",
    url: "quotes/words-that-are-empowered-that-make-your-hair-stand-on-end.html",
		content: "Poetry is words that are empowered that make your hair stand on end that you recognize instantly as being some form of subjective truth that has an objective reality to it because somebody s realized it Allen Ginsberg American poet and writer No Direction Home "
	},
	{
		title: "The modern horrors of bureaucracy",
		date: "1964",
    url: "quotes/the-modern-horrors-of-bureaucracy.html",
		content: "Yet the people here suffered apparently from the fact that they were employed not by an educational institution but by a bureaucratic system They were all to a large extent clerks neatly bound up in red tape and like clerks they gave themselves the illusion of freedom by discussing and ridiculing the strictures that bound them Kate thought lovingly of her own university where one struggled God knew against the ancient sins of favoritism flattery and simony but where the modern horrors of bureaucracy had not yet strangled her colleagues or herself Amanda Cross American academic at Columbia University, a prolific feminist author of academic studies, and a mystery author. In the Last Analysis "
	},
	{
		title: "The sort of organisms that interpret and modify their agency",
		date: "1976",
    url: "quotes/the-sort-of-organisms-that-interpret-and-modify-their-agency.html",
		content: "Humans are just the sort of organisms that interpret and modify their agency through their conception of themselves This is a complicated biological fact about us Amélie Rorty Belgian-born American philosopher The Identities of Persons "
	},
	{
		title: "A Coke is a Coke",
		date: "1975",
    url: "quotes/a-coke-is-a-coke.html",
		content: "What s great about this country is that America started the tradition where the richest consumers buy essentially the same things as the poorest You can be watching TV and see Coca Cola and you know that the President drinks Coke Liz Taylor drinks Coke and just think you can drink Coke too A Coke is a Coke and no amount of money can get you a better Coke than the one the bum on the corner is drinking All the Cokes are the same and all the Cokes are good Liz Taylor knows it the President knows it the bum knows it and you know it Andy Warhol American artist, film director, and producer The Philosophy of Andy Warhol "
	},
	{
		title: "The Four-Fold Way",
		date: "1993",
    url: "quotes/the-four-fold-way.html",
		content: "The following four principles each based on an archetype comprise what I call the Four Fold Way 1 <em>Show up or choose to be present < em> Being present allows us to access the human resources of power presence and communication This is the way of the Warrior 2 <em>Pay attention to what has heart and meaning < em> Paying attention opens us to the human resources of love gratitude acknowledgment and validation This is the way of the Healer 3 <em>Tell the truth without blame or judgment < em> Nonjudgmental truthfulness maintains our authenticity and develops our inner vision and intuition This is the way of the Visionary 4 <em>Be open to outcome not attached to outcome < em> Openness and nonattachment help us to recover the human resources of wisdom and objectivity This is the way of the Teacher Angeles Arrien A Basque-American cultural anthropologist, educator, author, lecturer and consultant The Four-Fold Way "
	},
	{
		title: "Life is not like formula fiction",
		date: "1994",
    url: "quotes/life-is-not-like-formula-fiction.html",
		content: "Life is not like formula fiction The villain has a heart and the hero has great flaws Anne Lamott American novelist and non-fiction writer Bird by Bird: Some Instructions on Writing and Life "
	},
	{
		title: "Fuzzy Concept",
		date: "",
    url: "quotes/fuzzy-concept.html",
		content: "There is nothing worse than a brilliant image of a fuzzy concept Ansel Adams American landscape photographer and environmentalist unknown "
	},
	{
		title: "Excitement from Art",
		date: "1974",
    url: "quotes/excitement-from-art.html",
		content: "The excitement we derive from a work of art is mostly the excitement of seeing connections that did not exist before of seeing quite different aspects of life unified through a pattern Anthony Burgess English writer and composer English Literature: A Survey for Students "
	},
	{
		title: "The heart of liberty",
		date: "1992",
    url: "quotes/the-heart-of-liberty.html",
		content: "At the heart of liberty is the right to define one s own concept of existence of meaning of the universe and of the mystery of human life Anthony M. Kennedy American lawyer and jurist Planned Parenthood v. Casey US Supreme Court opinion "
	},
	{
		title: "The Extent of Freedom in All of its Dimensions",
		date: "June 26, 2015",
    url: "quotes/the-extent-of-freedom-in-all-of-its-dimensions.html",
		content: "The nature of injustice is that we may not always see it in our own times The generations that wrote and ratified the Bill of Rights and the Fourteenth Amendment did not presume to know the extent of freedom in all of its dimensions and so they entrusted to future generations a charter protecting the right of all persons to enjoy liberty as we learn its meaning Anthony M. Kennedy American lawyer and jurist Supreme Court Decision on Same-Sex Marriage "
	},
	{
		title: "We shall see the sky sparkling with diamonds",
		date: "1897",
    url: "quotes/we-shall-see-the-sky-sparkling-with-diamonds.html",
		content: "We shall find peace We shall hear the angels we shall see the sky sparkling with diamonds Anton Chekhov Russian playwright and short-story writer Uncle Vanya "
	},
	{
		title: "Accidents of birth",
		date: "2016",
    url: "quotes/accidents-of-birth.html",
		content: "Today Americans still feel that by and large every individual is responsible for constructing his or her own fate the classic pursuit of happiness and there is still much debate in the United States about the extent to which if at all an individual s success or failure is also shaped by accidents of birth Nordic people have long ago moved beyond this debate To most Nordics it s completely obvious that an accident of birth like being born into poverty or a neighborhood without a good school can severely disadvantage an individual and destroy any chances of success no matter what he or she does Anu Partanen Finnish journalist living in the United States The Nordic Theory of Everything: In Search of a Better Life "
	},
	{
		title: "Independence, freedom and opportunity for every member of society",
		date: "2016",
    url: "quotes/independence-freedom-and-opportunity-for-every-member-of-society.html",
		content: "At the same time the Nordic theory of love has become an overarching philosophy about how to structure a society As such it has inspired the broad variety of policy choices in the Nordic nations that together ensure a single predominant goal independence freedom and opportunity for every member of society Anu Partanen Finnish journalist living in the United States The Nordic Theory of Everything: In Search of a Better Life "
	},
	{
		title: "Nordic societies have simply taken the job of government seriously",
		date: "2016",
    url: "quotes/nordic-societies-have-simply-taken-the-job-of-government-seriously.html",
		content: "Overall the secret to Nordic success is not complicated Nordic societies have simply taken the job of government seriously They make mistakes and have their troubles but they keep tweaking their systems in search of improvements and they work hard to balance the books They prove that there is nothing inherent in government that automatically makes it less efficient for arranging social services than the private sector Anu Partanen Finnish journalist living in the United States The Nordic Theory of Everything: In Search of a Better Life "
	},
	{
		title: "The US remains astonishingly backward when it comes to education",
		date: "2016",
    url: "quotes/the-us-remains-astonishingly-backward-when-it-comes-to-education.html",
		content: "It s an unfortunate fact that the United States remains astonishingly backward compared to almost all other advanced Western countries when it comes to education because in America what predicts how well a child will do in school is not a child s aptitude or hard work but the status of the child s parents which is to say their own levels of education and wealth Other countries suffer from this condition too but the United States is especially anachronistic And it s getting worse The influence of this wealth predictor in the United States today has only been growing stronger in recent years Anu Partanen Finnish journalist living in the United States The Nordic Theory of Everything: In Search of a Better Life "
	},
	{
		title: "You can simply focus on raising a human being",
		date: "2016",
    url: "quotes/you-can-simply-focus-on-raising-a-human-being.html",
		content: "Imagine then what it s like to be a Nordic parent You can simply focus on raising a human being in an age appropriate way at every stage without ever once feeling guilty that you re not saving enough money or not making enough money to secure them the college education they ll need to avoid ending up in the gutter Anu Partanen Finnish journalist living in the United States The Nordic Theory of Everything: In Search of a Better Life "
	},
	{
		title: "We don't even own suits",
		date: "July 19, 2010",
    url: "quotes/we-dont-even-own-suits.html",
		content: "When an AT amp T rep suggested Jobs wear a suit to meet with AT amp T s CEO the deputy replied We re Apple We don t wear suits We don t even own suits Apple  The Oft Unhappy Marriage of Apple and AT&amp;T "
	},
	{
		title: "Entertain a Thought",
		date: "",
    url: "quotes/entertain-a-thought.html",
		content: "It is the mark of an educated mind to be able to entertain a thought without accepting it Aristotle Greek philosopher unknown "
	},
	{
		title: "A beast or a god",
		date: "350 BC",
    url: "quotes/a-beast-or-a-god.html",
		content: "But he who is unable to live in society or who has no need because he is sufficient for himself must be either a beast or a god he is no part of a state A social instinct is implanted in all men by nature Aristotle Greek philosopher Politics "
	},
	{
		title: "The welfare of the whole human race",
		date: "",
    url: "quotes/the-welfare-of-the-whole-human-race.html",
		content: "The twentieth century will be chiefly remembered by future generations not as an era of political conflicts or technical inventions but as an age in which human society dared to think of the welfare of the whole human race as a practical objective Arnold J. Toynbee English historian, a philosopher of history, an author of numerous books and a research professor of international history  "
	},
	{
		title: "The Makers of Things",
		date: "2009",
    url: "quotes/the-makers-of-things.html",
		content: "In reaffirming the greatness of our nation we understand that greatness is never a given It must be earned Our journey has never been one of shortcuts or settling for less It has not been the path for the faint hearted for those who prefer leisure over work or seek only the pleasures of riches and fame Rather it has been the risk takers the doers the makers of things some celebrated but more often men and women obscure in their labor who have carried us up the long rugged path towards prosperity and freedom Barack Obama American politician and attorney who served as the 44th president of the United States from 2009 to 2017 2009 Inaugral Address "
	},
	{
		title: "A Return to These Truths",
		date: "2009",
    url: "quotes/a-return-to-these-truths.html",
		content: "Our challenges may be new The instruments with which we meet them may be new But those values upon which our success depends hard work and honesty courage and fair play tolerance and curiosity loyalty and patriotism these things are old These things are true They have been the quiet force of progress throughout our history What is demanded then is a return to these truths Barack Obama American politician and attorney who served as the 44th president of the United States from 2009 to 2017 Inaugral Address "
	},
	{
		title: "Time is no match for Toni Morrison",
		date: "06 Aug 2019",
    url: "quotes/time-is-no-match-for-toni-morrison.html",
		content: "Time is no match for Toni Morrison In her writing she sometimes toyed with it warping and creasing it bending it to her masterful will In her life s story too she treated time nontraditionally A child of the Great Migration who d lifted up new more diverse voices in American literature as an editor Toni s first novel wasn t published until she was 39 years old From there followed an ascendant career a Pulitzer a Nobel and so much more and with it a fusion of the African American story within the American story Toni Morrison was a national treasure Her writing was not just beautiful but meaningful a challenge to our conscience and a call to greater empathy She was as good a storyteller as captivating in person as she was on the page And so even as Michelle and I mourn her loss and send our warmest sympathies to her family and friends we know that her stories that our stories will always be with us and with those who come after and on and on for all time Barack Obama American politician and attorney who served as the 44th president of the United States from 2009 to 2017 Time is no match for Toni Morrison "
	},
	{
		title: "No Perfect Answer",
		date: "7 Dec 2020",
    url: "quotes/no-perfect-answer.html",
		content: "The higher up you go in politics but I think this is true of any organization the more you will be confronted with challenges problems issues that do not yield a perfect answer Barack Obama American politician and attorney who served as the 44th president of the United States from 2009 to 2017 Dare to Lead podcast "
	},
	{
		title: "The best thing we can do is treat each other better",
		date: "1 June 2021",
    url: "quotes/the-best-thing-we-can-do-is-treat-each-other-better.html",
		content: "But the point is I guess that my politics has always been premised on the notion that the differences we have on this planet are real They re profound And they cause enormous tragedy as well as joy But we re just a bunch of humans with doubts and confusion We do the best we can And the best thing we can do is treat each other better because we re all we ve got Barack Obama American politician and attorney who served as the 44th president of the United States from 2009 to 2017 The Ezra Klein Show "
	},
	{
		title: "Immigration is tough, and it always has been",
		date: "2021-09-18",
    url: "quotes/immigration-is-tough-and-it-always-has-been.html",
		content: "Immigration is tough It always has been because on the one hand I think we are naturally a people that wants to help others And we see tragedy and hardship and families that are desperately trying to get here so that their kids are safe and they re in some cases fleeing violence or catastrophe At the same time we re a nation state We have borders The idea that we can just have open borders is something that as a practical matter is unsustainable Barack Obama American politician and attorney who served as the 44th president of the United States from 2009 to 2017 ABC News Interview with Barack Obama on 18 Sep 2021 "
	},
	{
		title: "Freedom of Judgment",
		date: "1670",
    url: "quotes/freedom-of-judgment.html",
		content: "Since we have the rare good fortune to live in a commonwealth where the freedom of judgment is fully granted to the individual citizen and he may worship God as he pleases and where nothing is esteemed dearer and more precious than freedom I think I am undertaking no ungrateful or unprofitable task in demonstrating that not only can this freedom be granted without endangering piety and the peace of the commonwealth but also the peace of the commonwealth and piety depend on this freedom Baruch Spinoza One of the foremost and seminal thinkers of the Enlightenment, modern biblical criticism, and 17th-century Rationalism Tractatus Theologico-Politicus "
	},
	{
		title: "Notions to Explain Nature",
		date: "1677",
    url: "quotes/notions-to-explain-nature.html",
		content: "We see therefore that all the notions whereby the common people are wont to explain Nature are merely modes of imagining and denote not the nature of anything but only the constitution of the imagination Baruch Spinoza One of the foremost and seminal thinkers of the Enlightenment, modern biblical criticism, and 17th-century Rationalism The Ethics "
	},
	{
		title: "The stagnation of American middle-class living standards",
		date: "2005",
    url: "quotes/the-stagnation-of-american-middle-class-living-standards.html",
		content: "I believe that the rising intolerance and incivility and the eroding generosity and openness that have marked important aspects of American society in the recent past have been in significant part a consequence of the stagnation of American middle class living standards Ben Friedman American political economist The Moral Consequences of Economic Growth "
	},
	{
		title: "Every Body cries, a Union is absolutely necessary",
		date: "29 December 1754",
    url: "quotes/every-body-cries-a-union-is-absolutely-necessary.html",
		content: "Every Body cries a Union is absolutely necessary but when they come to the Manner and Form of the Union their weak Noddles are perfectly distracted Benjamin Franklin American polymath who was active as a writer, scientist, inventor, statesman, diplomat, printer, publisher, and political philosopher. The Writings of Benjamin Franklin "
	},
	{
		title: "Art is a Hammer",
		date: "",
    url: "quotes/art-is-a-hammer.html",
		content: "Art is not a mirror held up to reality but a hammer with which to shape it Bertolt Brecht German theatre practitioner, playwright, and poet Unknown "
	},
	{
		title: "Men Fear Thought",
		date: "",
    url: "quotes/men-fear-thought.html",
		content: "Men fear thought as they fear nothing else on earth more than ruin more even than death Thought is subversive and revolutionary destructive and terrible thought is merciless to privilege established institutions and comfortable habit Thought looks into the pit of hell and is not afraid Thought is great and swift and free the light of the world and the chief glory of man Bertrand Russell British polymath, philosopher, logician, mathematician, historian, writer, social critic, political activist, and Nobel laureate unknown "
	},
	{
		title: "Ten Commandments for Teachers",
		date: "",
    url: "quotes/ten-commandments-for-teachers.html",
		content: "1 Do not feel absolutely certain of anything 2 Do not think it worth while to proceed by concealing evidence for the evidence is sure to come to light 3 Never try to discourage thinking for you are sure to succeed 4 When you meet with opposition even if it should be from your husband or your children endeavour to overcome it by argument and not by authority for a victory dependent upon authority is unreal and illusory 5 Have no respect for the authority of others for there are always contrary authorities to be found 6 Do not use power to suppress opinions you think pernicious for if you do the opinions will suppress you 7 Do not fear to be eccentric in opinion for every opinion now accepted was once eccentric 8 Find more pleasure in intelligent dissent that in passive agreement for if you value intelligence as you should the former implies a deeper agreement than the latter 9 Be scrupulously truthful even if the truth is inconvenient for it is more inconvenient when you try to conceal it 10 Do not feel envious of the happiness of those who live in a fool s paradise for only a fool will think that it is happiness Bertrand Russell British polymath, philosopher, logician, mathematician, historian, writer, social critic, political activist, and Nobel laureate unknown "
	},
	{
		title: "The Celestial Teapot",
		date: "1952",
    url: "quotes/the-celestial-teapot.html",
		content: "Many orthodox people speak as though it were the business of skeptics to disprove received dogmas rather than of dogmatics to prove them This is of course a mistake If I were to suggest that between the Earth and Mars there is a china teapot revolving about the sun in an elliptical orbit nobody would be able to disprove my assertion provided I were careful to add that the teapot is too small to be revealed even by our most powerful telescopes But if I were to go on to say that since my assertion cannot be disproved it is intolerable presumption on the part of human reason to doubt it I should rightly be thought to be talking nonsense If however the existence of such a teapot were affirmed in ancient books taught as the sacred truth every Sunday and instilled into the minds of children at school hesitation to believe in its existence would become a mark of eccentricity and entitle the doubter to the attentions of the psychiatrist in an enlightened age or of the Inquisitor in an earlier time Bertrand Russell British polymath, philosopher, logician, mathematician, historian, writer, social critic, political activist, and Nobel laureate Is There A God? "
	},
	{
		title: "How to Grow Old",
		date: "1953",
    url: "quotes/how-to-grow-old.html",
		content: "Make your interests gradually wider and more impersonal until bit by bit the walls of the ego recede and your life becomes increasingly merged in the universal life An individual human existence should be like a river small at first narrowly contained within its banks and rushing passionately past rocks and over waterfalls Gradually the river grows wider the banks recede the waters flow more quietly and in the end without any visible break they become merged in the sea and painlessly lose their individual being Bertrand Russell British polymath, philosopher, logician, mathematician, historian, writer, social critic, political activist, and Nobel laureate How to Grow Old "
	},
	{
		title: "We must welcome the stranger",
		date: "25 Jan 2023",
    url: "quotes/we-must-welcome-the-stranger.html",
		content: "I have always believed in the idea that we must welcome the stranger the person in need And that if we search for common ground with all those we meet we will discover our shared humanity and we will all be better for it Bibi Bahrami  A stranger planned to bomb my mosque. He became a member instead. "
	},
	{
		title: "Digging up fossil fuels and setting them alight",
		date: "2019",
    url: "quotes/digging-up-fossil-fuels-and-setting-them-alight.html",
		content: "For two hundred years human economic activity has largely consisted of digging up fossil fuels and setting them alight and while two hundred years seems like a long time to us in geological terms it s like a bat out of well out of hell We re currently injecting carbon dioxide into the atmosphere ten times faster than during the End Permiasn which was just to repeat the worst event in the earth s history Bill McKibben American environmentalist, author, and journalist Falter: Has the Human Game Begun to Play Itself Out? "
	},
	{
		title: "The Human Experiment is Now in Question",
		date: "2019",
    url: "quotes/the-human-experiment-is-now-in-question.html",
		content: "Put simply between ecological destruction and technological hubris the human experiment is now in question The stakes feel very high and the odds very long and the trends very ominous Bill McKibben American environmentalist, author, and journalist Falter: Has the Human Game Begun to Play Itself Out? "
	},
	{
		title: "The Team, The Team, The Team",
		date: "1983",
    url: "quotes/the-team-the-team-the-team.html",
		content: "We want the Big Ten championship and we re gonna win it as a Team They can throw out all those great backs and great quarterbacks and great defensive players throughout the country and in this conference but there s gonna be one Team that s gonna play solely as a Team No man is more important than The Team No coach is more important than The Team The Team The Team The Team and if we think that way all of us everything that you do you take into consideration what effect does it have on my Team Because you can go into professional football you can go anywhere you want to play after you leave here You will never play for a Team again You ll play for a contract You ll play for this You ll play for that You ll play for everything except the team and think what a great thing it is to be a part of something that is The Team We re gonna win it We re gonna win the championship again because we re gonna play as team better than anybody else in this conference we re gonna play together as a team We re gonna believe in each other we re not gonna criticize each other we re not gonna talk about each other we re gonna encourage each other And when we play as a team when the old season is over you and I know it s gonna be Michigan again Michigan Bo Schembechler American football player, coach, and athletics administrator The Team, The Team, The Team "
	},
	{
		title: "The Songs are my Lexicon",
		date: "1997",
    url: "quotes/the-songs-are-my-lexicon.html",
		content: "Here s the thing with me and the religious thing This is the flat out truth I find the religiosity and philosophy in the music I don t find it anywhere else Songs like Let Me Rest on a Peaceful Mountain or I Saw the Light that s my religion I don t adhere to rabbis preachers evangelists all of that I ve learned more from the songs than I ve learned from any of this kind of entity The songs are my lexicon I believe the songs Bob Dylan American singer-songwriter, author and visual artist Bob Dylan 1997 Interview for Newsweek "
	},
	{
		title: "Living happily ever after",
		date: "2005",
    url: "quotes/living-happily-ever-after.html",
		content: "Living happily ever after is not the end of a fairy tale It is the common purpose that all life seeks Bob Mandel  The Twelve Gifts in Marriage "
	},
	{
		title: "A diminishing sense of shared humanity",
		date: "2017",
    url: "quotes/a-diminishing-sense-of-shared-humanity.html",
		content: "In grounded theory researchers try to understand what we call the main concern of study participants When it comes to belonging I asked What are people trying to achieve What are they worried about The answer was surprisingly complex They want to be a part of something to experience real connection with others but not at the cost of their authenticity freedom or power Participants further reported feeling surrounded by us versus them cultures that create feelings of spiritual disconnection When I dug deeper into what they meant by spiritually disconnected the research participants described a diminishing sense of shared humanity Over and over participants talked about their concern that the only thing that binds us together now is shared fear and disdain not common humanity shared trust respect or love Brené Brown American professor, author, and podcast host Braving the Wilderness: The Quest for True Belonging and the Courage to Stand Alone "
	},
	{
		title: "Cooperative communication",
		date: "2020",
    url: "quotes/cooperative-communication.html",
		content: "What allowed us to thrive while other humans went extinct was a kind of cognitive superpower a particular type of friendliness called cooperative communication We are experts at working together with other people even strangers We can communicate with someone we ve never met about a shared goal and work together to accomplish it Brian Hare and Vanessa Woods Professor of evolutionary anthropology Survival of the Friendliest: Understanding our Origins and Rediscovering our Common Humanity "
	},
	{
		title: "An ultracultural species is born",
		date: "2020",
    url: "quotes/an-ultracultural-species-is-born.html",
		content: "Domesticating a wolf brain or an ape brain is impressive But when you domesticate a human brain this is when the real magic begins An ultracultural species is born A unique type of friendliness must have evolved in our species that allowed for larger group sizes higher population densities and more amicable relations between neighboring groups that in turn created larger social networks This encouraged the transmission of more innovations between more innovators Cultural ratcheting went from slow and sporadic to fast and furious The result was exponential growth in technology and the emergence of behavioral modernity Brian Hare and Vanessa Woods Professor of evolutionary anthropology Survival of the Friendliest: Understanding our Origins and Rediscovering our Common Humanity "
	},
	{
		title: "I learned a lot of things from failure",
		date: "2008",
    url: "quotes/i-learned-a-lot-of-things-from-failure.html",
		content: "I learned a lot of things from failure When you play 162 games I don t think any sport emulates life like baseball You play football once a week or basketball twice But you start playing baseball you play every day day in and day out And you understand in a hurry that you re going to have bad days and bad nights You re going to have bad weeks and you just have to make up your mind that hey tomorrow s tomorrow and you forget about it Brooks Robinson American third baseman in Major League Baseball who played his entire career for the Baltimore Orioles We Would Have Played For Nothing "
	},
	{
		title: "A Long Conversation",
		date: "2009-Jan-05",
    url: "quotes/a-long-conversation.html",
		content: "At this point I m in the middle of a very long conversation with my audience It s an ongoing dialogue about what living means You create a space together You are involved in an act of the imagination together imagining the life you want to live the kind of country you want to live in the kind of place you want to leave to your children What are the things that bring you ecstasy and bliss what are the things that bring on the darkness and what can we do together to combat those things That s the dialogue I have in my imagination when I m writing I have it in front of me when I m performing Bruce Springsteen American rock singer, songwriter and guitarist Rolling Stone 2007 "
	},
	{
		title: "The Trick in Keeping Bands Together",
		date: "2009-Jan-05",
    url: "quotes/the-trick-in-keeping-bands-together.html",
		content: "The trick in keeping bands together is always the same Hey asshole the guy standing next to you is more important than you think he is Bruce Springsteen American rock singer, songwriter and guitarist Rolling Stone 2009-Jan-05 "
	},
	{
		title: "The Enormous Extension of our Being",
		date: "1961",
    url: "quotes/the-enormous-extension-of-our-being.html",
		content: "Those of us who have been true readers all our life seldom fully realize the enormous extension of our being which we owe to authors We realize it best when we talk with an unliterary friend He may be full of goodness and good sense but he inhabits a tiny world In it we should be suffocated The man who is contented to be only himself and therefore less a self is in prison My own eyes are not enough for me I will see through those of others Reality even seen through the eyes of many is not enough I will see what others have invented Even the eyes of all humanity are not enough I regret that the brutes cannot write books Very gladly would I learn what face things present to a mouse or a bee more gladly still would I perceive the olfactory world charged with all the information and emotion it carries for a dog C. S. Lewis British writer, literary scholar, and Anglican lay theologian An Experiment in Criticism "
	},
	{
		title: "Until you make the unconscious conscious",
		date: "1951",
    url: "quotes/until-you-make-the-unconscious-conscious.html",
		content: "Until you make the unconscious conscious it will direct your life and you will call it fate Carl Jung Swiss psychiatrist and psychoanalyst who founded analytical psychology  "
	},
	{
		title: "Mastery of Inner and Outer Worlds",
		date: "1962",
    url: "quotes/mastery-of-inner-and-outer-worlds.html",
		content: "Mastery of the inner world with a relative contempt for the outer must inevitably lead to great catastrophe Mastery of the outer world to the exclusion of the inner delivers us over to the demonic forces of the latter and keeps us barbaric despite all outward forms of culture Carl Jung Swiss psychiatrist and psychoanalyst who founded analytical psychology  "
	},
	{
		title: "Bathing in mystery and confusion",
		date: "1980",
    url: "quotes/bathing-in-mystery-and-confusion.html",
		content: "I don t mean to suggest that we have the final answers we are bathing in mystery and confusion on many subjects and I think that will always be our destiny The universe will always be much richer than our ability to understand it Carl Sagan American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator Conversations with Carl Sagan "
	},
	{
		title: "Skepticism and Openness",
		date: "1987",
    url: "quotes/skepticism-and-openness.html",
		content: "It seems to me what is called for is an exquisite balance between two conflicting needs the most skeptical scrutiny of all hypotheses that are served up to us and at the same time a great openness to new ideas Obviously those two modes of thought are in some tension But if you are able to exercise only one of these modes whichever one it is you re in deep trouble Some ideas are better than others The machinery for distinguishing them is an essential tool in dealing with the world and especially in dealing with the future And it is precisely the mix of these two modes of thought that is central to the success of science Carl Sagan American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator The Burden of Skepticism "
	},
	{
		title: "Books are key to understanding the world",
		date: "1995",
    url: "quotes/books-are-key-to-understanding-the-world.html",
		content: "For 99 percent of the tenure of humans on earth nobody could read or write The great invention had not yet been made Except for firsthand experience almost everything we knew was passed on by word of mouth As in the children s game Telephone over tens and hundreds of generations information would slowly be distorted and lost Books changed all that Books purchasable at low cost permit us to interrogate the past with high accuracy to tap the wisdom of our species to understand the point of view of others and not just those in power to contemplate with the best teachers the insights painfully extracted from Nature of the greatest minds that ever were drawn from the entire planet and from all of our history They allow people long dead to talk inside our heads Books can accompany us everywhere Books are patient where we are slow to understand allow us to go over the hard parts as many times as we wish and are never critical of our lapses Books are key to understanding the world and participating in a democratic society Carl Sagan American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator The Demon-Haunted World: Science as a Candle in the Dark "
	},
	{
		title: "Apes and Humans",
		date: "1993",
    url: "quotes/apes-and-humans.html",
		content: "Philosophers and scientists confidently offer up traits said to be uniquely human and the apes casually knock them down toppling the pretension that humans constitute some sort of biological aristocracy among the beings of Earth Instead we are more like the nouveau riche incompletely accommodated to our recent exalted state insecure about who we are and trying to put as much distance as possible between us and our humble origins Carl Sagan and Ann Druyan American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator; American writer, producer, and director. Shadows of Forgotten Ancestors: A Search for Who We Are "
	},
	{
		title: "Chimps and Humans",
		date: "1993",
    url: "quotes/chimps-and-humans.html",
		content: "On the basis of all the evidence the closest relative of the human proves to be the chimp The closest relative of the chimp is the human Not orangs but people Us Chimps and humans are nearer kin than are chimps and gorillas or any other kinds of ape not of the same species Carl Sagan and Ann Druyan American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator; American writer, producer, and director. Shadows of Forgotten Ancestors: A Search for Who We Are "
	},
	{
		title: "A raving demagogue counseling hatred",
		date: "1993",
    url: "quotes/a-raving-demagogue-counseling-hatred.html",
		content: "So next time you hear a raving demagogue counseling hatred for other slightly different groups of humans for a moment at least see if you can understand his problem He is heeding an ancient call that however dangerous obsolete and maladaptive it may be today once benefitted our species Carl Sagan and Ann Druyan American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator; American writer, producer, and director. Shadows of Forgotten Ancestors: A Search for Who We Are "
	},
	{
		title: "Everything had nuance",
		date: "2017",
    url: "quotes/everything-had-nuance.html",
		content: "In Pauline and Mal s house nothing was simple In her parents house things had been good or bad right or wrong useful or wasteful There had been nothing in between Here she found everything had nuance everything had an unrevealed side or unexplored depths Everything was worth looking at more closely Celeste Ng American writer and novelist Little Fires Everywhere "
	},
	{
		title: "Selfish and contentious people will not cohere",
		date: "1871",
    url: "quotes/selfish-and-contentious-people-will-not-cohere.html",
		content: "Selfish and contentious people will not cohere and without coherence nothing can be effected Charles Darwin English naturalist, geologist and biologist  "
	},
	{
		title: "To simply see human beings",
		date: "28 Apr 2018",
    url: "quotes/to-simply-see-human-beings.html",
		content: "If I ask you all today to look around and tell me who you see When you look around I don t want you to see black white Asian I don t want you to wonder if a person is Democrat or Republican gay or straight When you look around I just want you to simply see human beings nothing more nothing less And I guarantee you if you can begin to see people that way just as human beings you ll begin to treat them a little differently you ll begin to understand their points of view Charles Woodson American football player who won a Heisman Trophy playing for the Michigan Wolverines 2018 University of Michigan Spring Commencement Address "
	},
	{
		title: "Model II Decision-Making",
		date: "1974",
    url: "quotes/model-ii-decision-making.html",
		content: "Model II encourages the individual to maximize his uniqueness If in doing so he should arrive at goals that differ from those developed by others he will have done so under conditions of openness trust and risk taking The individual would therefore feel free to discuss his differences openly with the group Moreover if the individual is in a subordinate power position and if he feels he had adequate opportunity to dissuade the group and that the group publicly confronted and tested all differences then the individual will probably be motivated to work toward the group goal but still be motivated to generate new information that may change the group s decision This means that one can be externally committed to a decision and internally committed to the decision making processes that produced the decision yet simultaneously monitor the consequences of the decision thoroughly to seek new valid information to reconfront the decision without being considered disloyal In the model II world conflicts do not disappear indeed the illusion of conflict disappearing is more typical of the model I world in which conflicts are settled by power plays based on sanctions charisma or loyalty Chris Argyris and Donald Schön American business theorist and professor Theory in Practice: Increasing Personal Effectiveness "
	},
	{
		title: "Model II Values",
		date: "1974",
    url: "quotes/model-ii-values.html",
		content: "Clearly Model II touches on values that are central to social life and to the traditions of moral philosophy freedom of choice truth and testability the nature of commitment the possibilities for and limitations on openness in communication among individuals the basis for trust and cooperation among human beings the sources of long term personal effectiveness Chris Argyris and Donald Schön American business theorist and professor Theory in Practice: Increasing Personal Effectiveness "
	},
	{
		title: "A myth that a person need only do inner work",
		date: "1979",
    url: "quotes/a-myth-that-a-person-need-only-do-inner-work.html",
		content: "There is a myth sometimes widespread that a person need only do inner work in order to be alive like this that a man is entirely responsible for his own problems and that to cure himself he need only change himself The fact is a person is so far formed by his surroundings that his state of harmony depends entirely on his harmony with his surroundings Christopher Alexander Austrian-born British-American architect and design theorist The Timeless Way of Building "
	},
	{
		title: "Egocentric Existence",
		date: "1974",
    url: "quotes/egocentric-existence.html",
		content: "Both the authoritarian and the submissive develop standards which they feel will insure them against threat but these are very raw standards The submissive person chooses to get away with what he can within the life style which is possible for him The authoritarian chooses to do as he pleases He spawns as his raison d être the rights of assertive individualism These rights become in time the absolute rights of kings the unassailable prerogatives of management the inalienable rights of those who have achieved positions of power and even the rights of the lowly hustler to all he can hustle This is a world of the aggressive expression of man s lusts openly and unabashedly by the haves and more covertly and deviously by the have nots Clare W. Graves American professor of psychology The Futurist "
	},
	{
		title: "Man's nature is an open, constantly evolving system",
		date: "1974",
    url: "quotes/mans-nature-is-an-open-constantly-evolving-system.html",
		content: "The error which most people make when they think about human values is that they assume the nature of man is fixed and there is a single set of human values by which he should live Such an assumption does not fit with my research My data indicate that man s nature is an open constantly evolving system a system which proceeds by quantum jumps from one steady state system to the next through a hierarchy of ordered systems Clare W. Graves American professor of psychology The Futurist "
	},
	{
		title: "While he was focusing on the inner self, his outer world has gone to pot",
		date: "1974",
    url: "quotes/while-he-was-focusing-on-the-inner-self-his-outer-world-has-gone-to-pot.html",
		content: "At the personalistic level F S man becomes centrally concerned with peace with his inner self and in the relation of his self to the inner self of others He becomes concerned with belonging with being accepted with knowing the inner side of self and other selves so harmony can come to be so people as individuals can be at peace with themselves and thus with the world And when he achieves this he finds he must become concerned with more than self or other selves because while he was focusing on the inner self to the exclusion of the external world his outer world has gone to pot So now he turns outward to life and to the whole the total universe As he does so he begins to see the problems of restoring the balance of life which has been torn asunder by his individualistically oriented self seeking climb up the first ladder of existence Clare W. Graves American professor of psychology The Futurist "
	},
	{
		title: "Man must believe in an open future",
		date: "1972",
    url: "quotes/man-must-believe-in-an-open-future.html",
		content: "Man s freedom is a reality a reality that makes a difference to his physical as well as his mental health When Frankl s prisoners ceased to believe in the possibility of freedom they grew sick and died On the other hand when they saw that Dachau had no chimney standing out all night in the rain seemed no great hardship they laughed and joked The conclusion needs to be stated in letters ten feet high In order to realise his possibilities man must believe in an open future he must have a vision of something worth doing And this will not be possible until all the determinism and pessimism that we have inherited from the 19th century and which has infected every department of our culture from poetry to atomic physics has been dismissed as fallacious and illogical Colin Wilson English existentialist philosopher-novelist New Pathways In Psychology: Maslow and the Post-Freudian Revolution "
	},
	{
		title: "Critical Thinking Followed by Action",
		date: "",
    url: "quotes/critical-thinking-followed-by-action.html",
		content: "Interviewer What s the most important meditation we can do now Dalai Lama Critical thinking followed by action Discern what your world is Know the plot the scenario of this human drama And then figure out where your talents might fit in to make a better world Dalai Lama  I Am "
	},
	{
		title: "Quality Matters",
		date: "2011",
    url: "quotes/quality-matters.html",
		content: "Quality matters and much of the evidence suggests that while developing countries are encouraging and fostering meritocracy their Western rivals are increasingly approaching academe with an egalitarian flare more access of course with the benefit of widening educational opportunity even if at the expense of quality Dambisa Moyo A Zambian-born economist and author, known for her analysis of macroeconomics and global affairs How the West was Lost "
	},
	{
		title: "That community asks for and gets chaos",
		date: "1965",
    url: "quotes/that-community-asks-for-and-gets-chaos.html",
		content: "From the wild Irish slums of the 19th century Eastern seaboard to the riot torn suburbs of Los Angeles there is one unmistakable lesson in American history a community that allows a large number of men to grow up in broken families dominated by women never acquiring any stable relationship to male authority never acquiring any set of rational expectations about the future that community asks for and gets chaos Crime violence unrest disorder most particularly the furious unrestrained lashing out at the whole social structure that is not only to be expected it is very near to inevitable And it is richly deserved Daniel Patrick Moynihan American politician, sociologist, and diplomat The Negro Family: The Case for National Action "
	},
	{
		title: "Living with the strains of complexity",
		date: "1972",
    url: "quotes/living-with-the-strains-of-complexity.html",
		content: "Political society wants things simple Political scientists know them to be complex One could argue that in part the leftist impulse is so conspicuous among the educated and well to do precisely because they are exposed to more information and are accordingly forced to choose between living with the strains of complexity or lapsing into simplism Daniel Patrick Moynihan American politician, sociologist, and diplomat The Schism in Black America "
	},
	{
		title: "Everyone is entitled to his own opinion, but not his own facts",
		date: "1975",
    url: "quotes/everyone-is-entitled-to-his-own-opinion-but-not-his-own-facts.html",
		content: "Everyone is entitled to his own opinion but not his own facts Daniel Patrick Moynihan American politician, sociologist, and diplomat  "
	},
	{
		title: "The institution of the family",
		date: "1986",
    url: "quotes/the-institution-of-the-family.html",
		content: "The institution of the family is decisive in determining not only if a person has the capacity to love another individual but in the larger social sense whether he is capable of loving his fellow men collectively The whole of society rests on this foundation for stability understanding and social peace Daniel Patrick Moynihan American politician, sociologist, and diplomat Family and Nation "
	},
	{
		title: "A multiethnic democracy in which no particular ethnic group is in the majority",
		date: "13 Aug 2017",
    url: "quotes/a-multiethnic-democracy-in-which-no-particular-ethnic-group-is-in-the-majority.html",
		content: "The simple fact of the matter is that the world has never built a multiethnic democracy in which no particular ethnic group is in the majority and where political equality social equality and economies that empower all have been achieved We are engaged in a fight over whether to work together to build such a world Danielle Allen American classicist and political scientist Charlottesville is not the continuation of an old fight. It is something new. "
	},
	{
		title: "Torturing the Data",
		date: "1954",
    url: "quotes/torturing-the-data.html",
		content: "If you torture the data long enough it will confess to anything Darrell Huff American writer How to Lie With Statistics "
	},
	{
		title: "Thinking's a Dizzy Business",
		date: "1930",
    url: "quotes/thinkings-a-dizzy-business.html",
		content: "Nobody thinks clearly no matter what they pretend Thinking s a dizzy business a matter of catching as many of those foggy glimpses as you can and fitting them together the best you can That s why people hang on so tight to their beliefs and opinions because compared to the haphazard way in which they re arrived at even the goofiest opinion seems wonderfully clear sane and self evident And if you let it get away from you then you ve got to dive back into that foggy muddle to wrangle yourself out another to take its place Dashiell Hammett American author of hard-boiled detective novels and short stories; also a screenwriter and political activist The Dain Curse "
	},
	{
		title: "Successful Planning",
		date: "1957",
    url: "quotes/successful-planning.html",
		content: "The outcome of successful planning always looks like luck to saps Dashiell Hammett American author of hard-boiled detective novels and short stories; also a screenwriter and political activist The Dain Curse "
	},
	{
		title: "We vastly underestimate the impact of our immediate environment on our behavior",
		date: "16 Oct 2020",
    url: "quotes/we-vastly-underestimate-the-impact-of-our-immediate-environment-on-our-behavior.html",
		content: "Most people tend to think that characteristics of a person drive whether someone is ethical or not For example one s upbringing religious values or even genetics must determine whether a person is a good apple or a bad egg While those factors matter to some degree my research and decades of science in social and organizational psychology tell us that we vastly underestimate the impact of our immediate environment on our behavior Good people can do bad things in certain contexts and the reverse is true as well Dave Mayer An award-winning researcher and teacher and speaker, he is an expert on leadership, diversity, and ethics Changing the Frame: Family Photos on Your Desk Could Make You More Ethical on the Job "
	},
	{
		title: "Life is a series of daring adventures from a secure base",
		date: "March 3, 2017",
    url: "quotes/life-is-a-series-of-daring-adventures-from-a-secure-base.html",
		content: "Human development research offers a different formula All of life is a series of daring adventures from a secure base If government can create a framework in which people grow up amid healthy families nurturing schools thick communities and a secure safety net then they will have the resources and audacity to thrive in a free global economy and a diversifying skills economy David Brooks A Canadian-born American conservative political and cultural commentator who writes for *The New York Times* Trumpism at Its Best, Straight Up "
	},
	{
		title: "Life is more like settling a sequence of villages",
		date: "28 May 2018",
    url: "quotes/life-is-more-like-settling-a-sequence-of-villages.html",
		content: "Life is not really an individual journey Life is more like settling a sequence of villages You help build a community at home at work in your town and then you go off and settle more villages David Brooks A Canadian-born American conservative political and cultural commentator who writes for *The New York Times* The Strange Failure of the Educated Elite "
	},
	{
		title: "No Philosophy of Family Life",
		date: "March 2020",
    url: "quotes/no-philosophy-of-family-life.html",
		content: "In other words while social conservatives have a philosophy of family life they can t operationalize because it no longer is relevant progressives have no philosophy of family life at all because they don t want to seem judgmental The sexual revolution has come and gone and it s left us with no governing norms of family life no guiding values no articulated ideals On this most central issue our shared culture often has nothing relevant to say and so for decades things have been falling apart David Brooks A Canadian-born American conservative political and cultural commentator who writes for *The New York Times* The Nuclear Family was a Mistake "
	},
	{
		title: "Symbolic Language",
		date: "2008",
    url: "quotes/symbolic-language.html",
		content: "At the moment the most powerful marker the feature that distinguishes our species most decisively from closely related species appears to be symbolic language Many animals can communicate with each other and share information in rudimentary ways But humans are the only creatures who can communicate using symbolic language a system of arbitrary symbols that can be linked by formal grammars to create a nearly limitless variety of precise utterances Symbolic language greatly enhanced the precision of human communication and the range of ideas that humans can exchange Symbolic language allowed people for the first time to talk about entities that were not immediately present including experiences and events in the past and future as well as entities whose existence was not certain such as souls demons and dreams David Christian historian teaching the discipline of Big History This Fleeting World: A Short History of Humanity "
	},
	{
		title: "Rough consensus and running code",
		date: "1992",
    url: "quotes/rough-consensus-and-running-code.html",
		content: "We reject kings presidents and voting We believe in rough consensus and running code David D. Clark  A Cloudy Crystal Ball -- Visions of the Future "
	},
	{
		title: "Learning how to exercise some control over how and what you think",
		date: "2005",
    url: "quotes/learning-how-to-exercise-some-control-over-how-and-what-you-think.html",
		content: "As I m sure you guys know by now it is extremely difficult to stay alert and attentive instead of getting hypnotised by the constant monologue inside your own head may be happening right now Twenty years after my own graduation I have come gradually to understand that the liberal arts cliché about teaching you how to think is actually shorthand for a much deeper more serious idea learning how to think really means learning how to exercise some control over how and what you think It means being conscious and aware enough to choose what you pay attention to and to choose how you construct meaning from experience Because if you cannot exercise this kind of choice in adult life you will be totally hosed David Foster Wallace American author of novels, short stories and essays Commencement Address at Kenyon College "
	},
	{
		title: "The Most Precious Kind of Freedom",
		date: "2005",
    url: "quotes/the-most-precious-kind-of-freedom.html",
		content: "But there are all different kinds of freedom and the kind that is most precious you will not hear much talked about in the great outside world of winning and achieving and displaying The really important kind of freedom involves attention and awareness and discipline and effort and being able truly to care about other people and to sacrifice for them over and over in myriad petty little unsexy ways every day That is real freedom The alternative is unconsciousness the default setting the rat race the constant gnawing sense of having had and lost some infinite thing David Foster Wallace American author of novels, short stories and essays Commencement Address at Kenyon College "
	},
	{
		title: "The freedom to enact other forms of social existence",
		date: "2021",
    url: "quotes/the-freedom-to-enact-other-forms-of-social-existence.html",
		content: "If something did go terribly wrong in human history and given the current state of the world it s hard to deny something did then perhaps it began to go wrong precisely when people started losing that freedom to imagine and enact other forms of social existence to such a degree that some now feel this particular type of freedom hardly even existed or was barely exercised for the greater part of human history David Graeber and David Wengrow American anthropologist and British archaeologist The Dawn of Everything: A New History of Humanity "
	},
	{
		title: "Many humans just don't like their families",
		date: "2021",
    url: "quotes/many-humans-just-dont-like-their-families.html",
		content: "There is an obvious objection to evolutionary models which assume that our strongest social ties are based on close biological kinship many humans just don t like their families very much And this appears to be just as true of present day hunter gatherers as anybody else Many seem to find the prospect of living their entire lives surrounded by close relatives so unpleasant that they will travel very long distances just to get away from them David Graeber and David Wengrow American anthropologist and British archaeologist The Dawn of Everything: A New History of Humanity "
	},
	{
		title: "Three basic forms of social liberty",
		date: "2021",
    url: "quotes/three-basic-forms-of-social-liberty.html",
		content: "But for us the key point to remember is that we are not talking here about freedom as an abstract ideal or formal principle as in Liberty Equality and Fraternity Over the course of these pages we have instead talked about basic forms of social liberty which one might actually put into practice 1 the freedom to move away or relocate from one s surroundings 2 the freedom to ignore or disobey commands issued by others and 3 the freedom to shape entirely new social realities or shift back and forth between different ones David Graeber and David Wengrow American anthropologist and British archaeologist The Dawn of Everything: A New History of Humanity "
	},
	{
		title: "Very large social units are imaginary",
		date: "2021",
    url: "quotes/very-large-social-units-are-imaginary.html",
		content: "Very large social units are always in a sense imaginary Or to put it in a slightly different way there is always a fundamental distinction between the way one relates to friends family neighbourhood people and places that we actually know directly and the way one relates to empires nations and metropolises phenomena that exist largely or at least most of the time in our heads David Graeber and David Wengrow American anthropologist and British archaeologist The Dawn of Everything: A New History of Humanity "
	},
	{
		title: "The encoding of the Tribe Drive in our DNA",
		date: "2023",
    url: "quotes/the-encoding-of-the-tribe-drive-in-our-dna.html",
		content: "As we explore the natural history of tribalism we will see that some three hundred thousand years ago humans chanced upon a revolutionary adaptation that led to the encoding of the Tribe Drive in our DNA This was the evolution of nested groups each with their own particular symbols and enshrined shared myths and values that bound participants together in trusting relationships David R. Samson Associate Professor of Evolutionary Anthropology Our Tribal Future: How to Channel our Foundational Human Instincts Into a Force for Good "
	},
	{
		title: "Paradoxes rationally serve as tribal loyalty tests",
		date: "2023",
    url: "quotes/paradoxes-rationally-serve-as-tribal-loyalty-tests.html",
		content: "Anthropologist Claude Levi Strauss made the argument that the purpose of mythology is to create paradoxes for example the Holy Ghost is a paradoxical trinity where God the father God the Son and God the Holy Spirit are one and the same It is a mystery that must be believed nevertheless Paradoxes rationally serve as tribal loyalty tests because the more logic defying the premise the stronger the tribal signal David R. Samson Associate Professor of Evolutionary Anthropology Our Tribal Future: How to Channel our Foundational Human Instincts Into a Force for Good "
	},
	{
		title: "Sacred values",
		date: "2023",
    url: "quotes/sacred-values.html",
		content: "Sacred values differ from material or instrumental values in that they incorporate moral beliefs such as the welfare of family commitment to country or identification with a particular religion that is thought to be absolute and inviolable Sharing of these stories demonstrates honest reliable signals that an individual values the group and its goals Finally and perhaps most importantly the sharing of these sacred values is essential to the formation and maintenance of group identity David R. Samson Associate Professor of Evolutionary Anthropology  "
	},
	{
		title: "The systematic weaponization of the human Tribe Drive",
		date: "2023",
    url: "quotes/the-systematic-weaponization-of-the-human-tribe-drive.html",
		content: "There is growing evidence that tribalism is the systematic weaponization of the human Tribe Drive and will be one of the twenty first century s greatest military tools in global competition It may be the greatest threat humanity faces David R. Samson Associate Professor of Evolutionary Anthropology Our Tribal Future: How to Channel our Foundational Human Instincts Into a Force for Good "
	},
	{
		title: "The Tribe Drive",
		date: "2023",
    url: "quotes/the-tribe-drive.html",
		content: "The Tribe Drive is an ancient adaptation that has been a prerequisite for survival for 99 9 percent of our species evolutionary history It is a critical piece of cognitive machinery honed by millions of years of evolution that gave us the ability to navigate both cooperatively and competitively increasingly complex social landscapes David R. Samson Associate Professor of Evolutionary Anthropology Our Tribal Future: How to Channel our Foundational Human Instincts Into a Force for Good "
	},
	{
		title: "A tribe is a creed",
		date: "2023",
    url: "quotes/a-tribe-is-a-creed.html",
		content: "A tribe is not a race or even a population a tribe is a creed it is a team that has agreed upon a set of symbols including sacred values that identify membership A creed is a mechanism that glues together disparate small camps and bands of cohabitating humans into a singular identity and shared purpose Those who know the codes have in their possession a social passport David R. Samson Associate Professor of Evolutionary Anthropology Our Tribal Future: How to Channel our Foundational Human Instincts Into a Force for Good "
	},
	{
		title: "Software more plastic than hardware",
		date: "2002",
    url: "quotes/software-more-plastic-than-hardware.html",
		content: "Software is a much more plastic object than hardware You whip it up squeeze it and you can dream David Sayre American scientist Go To: The Story of the Math Majors, Bridge Players, Engineers, Chess Wizards, Maverick Scientists, and Iconoclasts-- the Programmers Who Created the Software Revolution "
	},
	{
		title: "Between-group selection became the primary evolutionary force",
		date: "2019",
    url: "quotes/between-group-selection-became-the-primary-evolutionary-force.html",
		content: "Our ancestors found ways to suppress disruptive competition among individuals within groups so that between group selection became the primary evolutionary force This favored group level coordination in all its forms including the transmission of learned information across generations David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "The chicken experiment",
		date: "2019",
    url: "quotes/the-chicken-experiment.html",
		content: "But the chicken experiments suggest that this logic is flawed even for farm animals where eugenics is a common practice It seems Francis Galton was deeply mistaken about the relationship between individual abilities and societal welfare The number of eggs laid by an individual hen is not an individual trait so much as it is a social trait because it depends upon how members of the group behave towards each other If the individuals who profit most from a social group do not contribute to the group s welfare and if their traits are heritable then selecting for them results in the collapse of the society David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "The entire pageant of human history",
		date: "2019",
    url: "quotes/the-entire-pageant-of-human-history.html",
		content: "Once we become attuned to it the entire pageant of human history starting approximately 100 000 years ago can be seen as evolution at high speed made possible by the transmission of learned information across generations Our departure from Africa and colonization of the rest of the planet our ability to inhabit all climatic zones and dozens of ecological niches as hunter gatherers our ability to grow food as farmers the advent of writing and the exploitation of fossil fuels were all made possible by the generational transfer of information David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "The eternal struggle between good and evil",
		date: "2019",
    url: "quotes/the-eternal-struggle-between-good-and-evil.html",
		content: "Cancer provides an example of multilevel selection and the eternal contest between the behaviors associated with good and evil With cancer the group is the multicellular organism and the individuals are the cells Just as the traits associated with good are vulnerable to the traits associated with evil for organisms living in social groups normal cells are vulnerable to cancer cells within multicellular organisms In the same way groups of morally virtuous individuals outcompete groups crippled by selfishness multicellular organisms free of cancer outcompete multicellular organisms riddled by cancer The eternal struggle between good and evil takes place within our own bodies and has since the origin of multicellular organisms roughly a billion years ago David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Increase nurturance thoughout the life span",
		date: "2019",
    url: "quotes/increase-nurturance-thoughout-the-life-span.html",
		content: "If we could say only one thing about making the world a better place to be reflected in our social policies and our personal decisions it would be to increase nurturance thoughout the life span and especially during its early stages starting before birth David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Living in small groups has been baked into our psyches",
		date: "2019",
    url: "quotes/living-in-small-groups-has-been-baked-into-our-psyches.html",
		content: "Living in small groups has been baked into our psyches by thousands of generations of genetic evolution and small groups need to remain cells in the cultural evolution of larger scale societies David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "The malleability of life",
		date: "2019",
    url: "quotes/the-malleability-of-life.html",
		content: "It is sobering to contemplate the malleability of life It only takes five generations to turn a population of mild mannered chickens into a population of psychopaths If we don t manage evolutionary processes they will very likely take us where we don t want to go David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Nurturance is a master variable",
		date: "2019",
    url: "quotes/nurturance-is-a-master-variable.html",
		content: "One basic prescription is to do everything possible to re create the ancestral social environment of small groups of nurturing individuals who know each other by their actions Provide such an environment and prosocial child development and adult relations will take place with surprising ease In the absence of a nurturing social environment the shaping of behavior will lead in a very different direction survival and reproductive strategies that are predicated on the absence of social support that benefit me and not you us and not them today without regard for tomorrow That s what Tony means by calling nurturance a master variable David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Our long-term personal and societal goals",
		date: "2019",
    url: "quotes/our-long-term-personal-and-societal-goals.html",
		content: "Furthermore as we have seen for genetic evolution what s adaptive in the evolutionary sense of the word isn t necessarily good or right in the normative sense Genetic evolution often results in adaptations that are good for me but not for you or us but not them or good over the short term but not the long term The behaviors that we adopt by open ended learning have all the same limitations If anything behavioral adaptations are even more shortsighted than genetic evolution because the immediate costs and benefits of our behaviors are more perceptible to us than the long term consequences You might want to lose weight but your mind is causing you to dip your hand into the next bag of Doritos You might want peace on earth but your mind is causing you to do what it takes to beat out your competitors for a promotion at the office A lot of cleverness will be required to align our learning abilities to our long term personal and societal goals David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Our species does represent a new evolutionary process",
		date: "2019",
    url: "quotes/our-species-does-represent-a-new-evolutionary-process.html",
		content: "As we are increasingly coming to realize our species does represent a new evolutionary process cultural evolution that far surpasses cultural traditions in other species This capacity for cultural evolution enabled our ancestors to spread over the globe inhabiting all climatic zones and dozens of ecological niches Then small scale societies tiny grains of thought coalesced into larger and larger societies over the past ten thousand years Human activities now rival other living processes and non living physical processes in shaping the earth and atmosphere David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Relationships among groups",
		date: "2019",
    url: "quotes/relationships-among-groups.html",
		content: "In large societies that consist of many groups relationships among groups must embody the same principles as the relationships among individuals within groups This means that the core design principles are scale independent David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Religions are great bushy trees",
		date: "2019",
    url: "quotes/religions-are-great-bushy-trees.html",
		content: "In short religions are great bushy trees that evolved and continue to evolve by cultural evolution David Sloan Wilson Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Small groups are a fundamental unit of human social organization",
		date: "2019",
    url: "quotes/small-groups-are-a-fundamental-unit-of-human-social-organization.html",
		content: "Multilevel selection theory tells us that something similar to team level selection took place in our species for thousands of generations resulting in adaptations for teamwork that are baked into the genetic architecture of our minds Absorbing this fact leads to the conclusion that small groups are a fundamental unit of human social organization Individuals cannot be understood except in the context of small groups and large scale societies need to be seen as a kind of multicellular organism comprising small groups David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "A vast repository of information learned and passed down from previous generations",
		date: "2019",
    url: "quotes/a-vast-repository-of-information-learned-and-passed-down-from-previous-generations.html",
		content: "With this perspective you can begin to think of yourself as not just a product of your genes and not just a product of your personal experience but also as one of many members of your culture who collectively contain a vast repository of information learned and passed down from previous generations This makes you part of something larger than yourself The information has not just been passed down but it has also been winnowed through the generations leaving us with a set of beliefs and practices that helped us to cohere as groups David Sloan Wilson American evolutionary biologist This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "The Columbia Disaster",
		date: "2005",
    url: "quotes/the-columbia-disaster.html",
		content: "Dr Sally Ride the first American woman in space and a member of the investigating board believes that the Columbia tragedy and the 1986 Challenger Space Shuttle disaster resulted from the same mindset saying NASA managers did not grab onto this problem and insist on an answer It was really quite the opposite They assumed they knew the answer They assumed the foam was not going to be a problem And they were insisting that people disprove the preconception they had Dennis Stauffer  Thinking Clockwise: A Field Guide for the Innovative Leader "
	},
	{
		title: "Cost of Education",
		date: "",
    url: "quotes/cost-of-education.html",
		content: "If you think education is expensive try ignorance Derek Bok  unknown "
	},
	{
		title: "When I get a little money I buy books",
		date: "12 April 1500",
    url: "quotes/when-i-get-a-little-money-i-buy-books.html",
		content: "When I get a little money I buy books and if any is left I buy food and clothes Desiderius Erasmus  to Jacob Batt "
	},
	{
		title: "Think globally, act locally",
		date: "1969",
    url: "quotes/think-globally-act-locally.html",
		content: "Think globally act locally Disputed   "
	},
	{
		title: "Ancient ethnic sores belching fire",
		date: "2006",
    url: "quotes/ancient-ethnic-sores-belching-fire.html",
		content: "The complications of this diversity can be overwhelming Ancient ethnic sores are belching fire while transnational companies linked by satellites conduct their business oblivious to the feudal past below Don Beck and Chris Cowan  Spiral Dynamics: Mastering Values, Leadership, and Change "
	},
	{
		title: "Only Two Sources of Real Wealth",
		date: "",
    url: "quotes/only-two-sources-of-real-wealth.html",
		content: "We have had to learn the bitter lesson that in all the world there are only two sources of real wealth the fruit of the earth and the labor of men and to estimate work not by the money it brings to the producer but by the worth of the thing that is made Dorothy L. Sayers  Why Work? "
	},
	{
		title: "Terrible with raisins in it",
		date: "",
    url: "quotes/terrible-with-raisins-in-it.html",
		content: "This wasn t just plain terrible this was fancy terrible This was terrible with raisins in it Dorothy Parker American writer, poet, and critic  "
	},
	{
		title: "Peace with Justice",
		date: "21 Jan 1957",
    url: "quotes/peace-with-justice.html",
		content: "We look upon this shaken Earth and we declare our firm and fixed purpose the building of a peace with justice in a world where moral law prevails The building of such a peace is a bold and solemn purpose To proclaim it is easy To serve it will be hard And to attain it we must be aware of its full meaning and ready to pay its full price We know clearly what we seek and why We seek peace knowing that peace is the climate of freedom And now as in no other age we seek it because we have been warned by the power of modern weapons that peace may be the only climate possible for human life itself Yet this peace we seek cannot be born of fear alone it must be rooted in the lives of nations There must be justice sensed and shared by all peoples for without justice the world can know only a tense and unstable truce There must be law steadily invoked and respected by all nations for without law the world promises only such meager justice as the pity of the strong upon the weak But the law of which we speak comprehending the values of freedom affirms the equality of all nations great and small Splendid as can be the blessings of such a peace high will be its cost in toil patiently sustained in help honorably given in sacrifice calmly borne Dwight D. Eisenhower American politician and soldier who served as the 34th president of the United States Eisenhower Second Inaugural Address "
	},
	{
		title: "What Democracy Is",
		date: "3 July 1943",
    url: "quotes/what-democracy-is.html",
		content: "We received a letter from the Writers War Board the other day asking for a statement on The Meaning of Democracy It presumably is our duty to comply with such a request and it is certainly our pleasure Surely the Board knows what democracy is It is the line that forms on the right It is the don t in don t shove It is the hole in the stuffed shirt through which the sawdust slowly trickles it is the dent in the high hat Democracy is the recurrent suspicion that more than half of the people are right more than half of the time It is the feeling of privacy in voting booths the feeling of communion in the libraries the feeling of vitality everywhere Democracy is a letter to the editor Democracy is the score at the beginning of the ninth It is an idea which hasn t been disproved yet a song the words of which have not gone bad It s the mustard on the hot dog and the cream in the rationed coffee Democracy is a request from a War Board in the middle of a morning in the middle of a war wanting to know what democracy is E. B. White  E. B. White on “The Meaning of Democracy” "
	},
	{
		title: "Only Connect",
		date: "1910",
    url: "quotes/only-connect.html",
		content: "Only connect That was the whole of her sermon Only connect the prose and the passion and both will be exalted and human love will be seen at its height Live in fragments no longer E. M. Forster English fiction writer, essayist and librettist Howard”s End "
	},
	{
		title: "The Rainbow Bridge",
		date: "1910",
    url: "quotes/the-rainbow-bridge.html",
		content: "Mature as he was she might yet be able to help him to the building of the rainbow bridge that should connect the prose in us with the passion Without it we are meaningless fragments half monks half beasts unconnected arches that have never joined into a man With it love is born and alights on the highest curve glowing against the gray sober against the fire E. M. Forster English fiction writer, essayist and librettist Howard”s End "
	},
	{
		title: "Wriggling",
		date: "1936",
    url: "quotes/wriggling.html",
		content: "Failure or success seem to have been allotted to men by their stars But they retain the power of wriggling of fighting with their star or against it and in the whole universe the only really interesting movement is this wriggle E. M. Forster English fiction writer, essayist and librettist Abinger Harvest "
	},
	{
		title: "The Most Dangerous of Devotions",
		date: "1998",
    url: "quotes/the-most-dangerous-of-devotions.html",
		content: "The most dangerous of devotions in my opinion is the one endemic to Christianity <em>I was not born to be of this world < em> With a second life waiting suffering can be endured especially in other people The natural environment can be used up Enemies of the faith can be savaged and suicidal martyrdom praised E. O. Wilson  Consilience: The Unity of Knowledge "
	},
	{
		title: "A Planet-Sized Problem",
		date: "1998",
    url: "quotes/a-planet-sized-problem.html",
		content: "Few will doubt that humankind has created a planet sized problem for itself No one wished it so but we are the first species to become a geophysical force altering Earth s climate a role previously reserved for tectonics sun flares and glacial cycles We are also the greatest destroyer of life since the ten kilometer wide meteorite that landed near Yucatan and ended the Age of Reptiles sixty five million years ago Through overpopulation we have put ourselves in danger of running out of food and water So a very Faustian choice is upon us whether to accept our corrosive and risky behavior as the unavoidable price of population and economic growth or to take stock of ourselves and search for a new environmental ethic E. O. Wilson  Consilience: The Unity of Knowledge "
	},
	{
		title: "True Character",
		date: "1998",
    url: "quotes/true-character.html",
		content: "True character arises from a deeper well than religion It is the internalization of moral principles of a society augmented by those tenets personally chosen by the individual strong enough to endure through trials of solitude and adversity The principles are fitted together into what we call integrity literally the integrated self wherein personal decisions feel good and true Character is in turn the enduring source of virtue It stands by itself and excites admiration in others It is not obedience to authority and while it is often consistent with and reinforced by religious belief it is not piety E. O. Wilson  Consilience: The Unity of Knowledge "
	},
	{
		title: "The Toxic Mix of Religion and Tribalism",
		date: "November 2, 2005",
    url: "quotes/the-toxic-mix-of-religion-and-tribalism.html",
		content: "The toxic mix of religion and tribalism has become so dangerous as to justify taking seriously the alternative view that humanism based on science is the effective antidote the light and the way at last placed before us E. O. Wilson  New Scientist "
	},
	{
		title: "The Real Problem of Humanity",
		date: "September 10, 2009",
    url: "quotes/the-real-problem-of-humanity.html",
		content: "The real problem of humanity is the following we have paleolithic emotions medieval institutions and god like technology E. O. Wilson  Harvard Magazine "
	},
	{
		title: "The Fragile Constructs of History",
		date: "2006",
    url: "quotes/the-fragile-constructs-of-history.html",
		content: "Perhaps the greatest cognitive barrier we face in making sense of the world is that we have come to view certain realities as part of a natural order that will remain unchallenged In fact many fundamental truths that we take for granted are simply the fragile constructs of history and could shift radically in the decade ahead Eamonn Kelly  Powerful Times: Rising to the Challenge of our Uncertain World "
	},
	{
		title: "The growth of firms",
		date: "1959",
    url: "quotes/the-growth-of-firms.html",
		content: "All the evidence we have indicates that the growth of firms is connected with the attempts of a particular group of human beings to do something Edith Penrose  The Theory of the Growth of the Firm "
	},
	{
		title: "The great primeval contract of eternal society",
		date: "",
    url: "quotes/the-great-primeval-contract-of-eternal-society.html",
		content: "Society is a partnership in all science a partnership in all art a partnership in every virtue and in all perfection As the ends of such a partnership cannot be obtained in many generations it becomes a partnership not only between those who are living but between those who are living those who are dead and those who are to be born Each contract of each particular State is but a clause in the great primeval contract of eternal society linking the lower with the higher natures connecting the visible and invisible world according to a fixed compact sanctioned by the inviolable oath whith holds all physical and all moral natures each in their appointed place Edmund Burke British and Irish statesman, economist, and philosopher Reflections on the Revolution in France "
	},
	{
		title: "The Divine Gift of Purely Nonsensical Speech and Action",
		date: "1944",
    url: "quotes/the-divine-gift-of-purely-nonsensical-speech-and-action.html",
		content: "Fen sighed We are all becoming standardized and normal Nigel The divine gift of purely nonsensical speech and action is in atrophy Would you believe it a pupil of mine had the impertinence the other day to tick me off for reading him passages regarding the Fimble Fowl and the Quangle Wangle as an illustration of pure poetic inventiveness I put him in his place all right In the semi darkness his eye became momentarily lambent with remembered satisfaction But there s no eccentricity nowadays none at all Edmund Crispin British mystery author The Case of the Gilded Fly "
	},
	{
		title: "An Irreplaceable Compact",
		date: "1946",
    url: "quotes/an-irreplaceable-compact.html",
		content: "Euthanasia Cadogan thought they all regard it as that and not as wilful slaughter not as the violent cutting off of an irreplaceable compact of passion and desire and affection and will not as a thrust into unimagined and illimitable darkness Edmund Crispin British mystery author The Moving Toyshop "
	},
	{
		title: "All must be held valuable, or none",
		date: "1947",
    url: "quotes/all-must-be-held-valuable-or-none.html",
		content: " But none of us has the right to assess the value of a human existence All must be held valuable or none The death of Christ and the death of Socrates Fen added dryly suggest that our judgments are scarcely infallible And the evil of Nazism lay precisely in this that a group of men began to differentiate between the value of their fellow beings and to act on their conclusions It isn t a habit which I for one would like to encourage Edmund Crispin British mystery author Swan Song "
	},
	{
		title: "Mistrust of experts",
		date: "1950",
    url: "quotes/mistrust-of-experts.html",
		content: "Mistrust of experts in spite of all that the apologists for technocracy can advance against it is deeply rooted in the English character and Fen whose habit of mind was not cosmopolitan shared in it abundantly Edmund Crispin British mystery author Sudden Vengeance "
	},
	{
		title: "Superstition is not mere intellectual error",
		date: "1950",
    url: "quotes/superstition-is-not-mere-intellectual-error.html",
		content: "Superstition is not mere intellectual error it is a part of the emotional life and the worldly wise who suppress it do so at the risk of impoverishing their souls an eventuality which for the most part they do not succeed in avoiding Edmund Crispin British mystery author Sudden Vengeance "
	},
	{
		title: "The Inner Life of the Artist",
		date: "1953",
    url: "quotes/the-inner-life-of-the-artist.html",
		content: "Great art is the outward expression of an inner life in the artist and this inner life will result in his personal vision of the world Edward Hopper American realist painter and printmaker Statements by Four Artists "
	},
	{
		title: "Capitalism works best in societies where there are high levels of trust",
		date: "2017",
    url: "quotes/capitalism-works-best-in-societies-where-there-are-high-levels-of-trust.html",
		content: "Adam Smith the great theorist of free trade economics is revered for his The Wealth of Nations His companion work The Theory of Moral Sentiments is mostly forgotten Yet it is the more important of the two In it Smith sets out why capitalism works best in societies where there are high levels of trust between its participants When social trust falls the cost of doing business rises Even in the late eighteenth century at the dawn of modern growth Smith grasped the psychological importance of possessing faith in a better future Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "Conscious Improvement for the Masses",
		date: "2017",
    url: "quotes/conscious-improvement-for-the-masses.html",
		content: "In the newly created Germany Otto von Bismarck set up the world s first social insurance system for the working classes in the late nineteenth century Britian followed suit under Lloyd George in the early twentieth century America distributed small parcels of freeholdings to first comers in the feverish westwards push that came after the Civil War Had America instead chosen to auction the undivided land to the highest bidders the US would now have a Latin America style hacienda economy The railroad barons would have gobbled up most of the land and converted it into vast estates America also made public land grants to set up new universities across its rapidly opening landscape Each of the big Western countries consciously opted to spread skills and assets to its poor For the first time in history governments exended public education moving the school leaving age upwards as the factory clock supplanted the farm day as the timekeeper of the new age The gilded age was an era of spectacular new wealth It was also a time of conscious improvement for the masses They were no longer unlettered As China and India are discovering the rise of mass literacy changes everything Though the Towntrees and the Carnegies became richer than God their workers could read and write Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "Governments losing their ability to anticipate events",
		date: "2017",
    url: "quotes/governments-losing-their-ability-to-anticipate-events.html",
		content: "Governments of all types democratic and authoritarian small states and superpowers are losing their ability to anticipate events They are thus losing the means to shape them The days when national leaders could peer around the corner and head off coming dangers are receding The best foreigh policy is conducted by calm minds in possession of the facts and shielded from the pressure to broadcast instant moral absolutes The more time leaders have to weigh up their options the likelier they are to choose the right ones The speed of technological change is working against them Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "A hereditary meritocracy",
		date: "2017",
    url: "quotes/a-hereditary-meritocracy.html",
		content: "The golden decades of the post war era bore out the theory of declining inequality But over the last thirty years that has gone into reverse During those decades the share of the US economic pie divided between labour and capital was roughly 70 30 Capital s share the flows taken up by returns on financial assets rather than wages and salaries has since risen to a level not seen since the days of The Great Gatsby The gap between the pay of the average chief executive and their employees has risen tenfold since the late 1970s to around four hundred Europe has seen varying rates of rising inequality with Britain and Spain recording the fastest rising Gini coefficient the measure of inequality and Germany and Scandinavia the least But all have been moving in the same way In contrast to the industrial era however today s inequality is accompanied by vanishing mobility It is not just that people are staying physically put They are also likelier to stay trapped in the same income group America in particular which had traditionally shown the highest class mobility of any Western country now has the lowest Today it is rarer for a poor American to become rich than a poor Briton which means the American dream is less likely to be realized in America The meritocratic society has given way to a hereditary meritocracy The children of the rich are overwhelmingly likely to stay rich Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "History is not some self-driving car",
		date: "2017",
    url: "quotes/history-is-not-some-self-driving-car.html",
		content: "But I have grave doubts about history s long arc History is not some self driving car taking humanity to a pre set destination Whichever human is behind the wheel must ensure the others stay in the car Telling some of the passengers they have no business in the driver s seat because they are clueless about the destination will sooner or later result in a crash Take back control was the chant of Brexiteers and Trump voters alike It is the war cry of populist backlashes across the Western world Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "Liberal democracy's strongest glue is economic growth",
		date: "2017",
    url: "quotes/liberal-democracys-strongest-glue-is-economic-growth.html",
		content: "We are taught to think our democracies are held together by values Our faith in history fuels that myth But liberal democracy s strongest glue is economic growth When groups fight over the fruits of growth the rules of the political game are relatively easy to uphold When those fruits disappear or are monopolised by a fortunate few things turn nasty History should have taught us that The losers seek scapegoats The politics of interest group management turn into a zero sum battle over declining resources The past also tells us to beware of the West at times of stark and growing inequality It rarely ends well Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "Responsible Nationalism",
		date: "2017",
    url: "quotes/responsible-nationalism.html",
		content: "Lawrence Summers complained of the development of stateless elites whose allegiance is to global economic success and their own prosperity rather than the interests of the nation where they are headquartered By 2016 he was warning that the public s tolerance for expert solutions appears to have been exhausted He advised a new responsible nationalism which would begin from the idea that the basic responsibility of government is to maximize the welfare of its citizens not to pursue some abstract concept of the global good The global elites in other words need to catch up with how most people view the world not the other way round Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "What would a new social compact look like?",
		date: "2017",
    url: "quotes/what-would-a-new-social-compact-look-like.html",
		content: "What would a new social compact look like Since our crisis is political the solutions must stretch far beyond economics My own views do not always fit into twentieth century pigeonholes But I believe that protecting society s weakest from arbitrary misfortune is the ultimate test of our civilisational worth It seems blindingly obvious that universal healthcare ought to be a basic shield against the vicissitudes of an increasingly volatile labour market Humane immigration laws should be enforced and the link between public benefits and citizenship restored Ours is an age of lawyers and accountants Micro regulation of the workplace ought to be replaced with broad guideines free speech in whatever form it takes must be upheld on campuses and in the media the tax system should be ruthlessly simplified governments must tax bad things such as carbon rather than good things like jobs companies should be taxed where they conduct their business Governments must launch Marshall Plans to retrain their middle classes The nature of representative democracy should be re imagined Above all money s stranglehold on the legistlative process has to be broken Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "Writing off half of society as deplorable",
		date: "2017",
    url: "quotes/writing-off-half-of-society-as-deplorable.html",
		content: "If we write off half of society as deplorable we forfeit claims on their attention We also endanger liberal democracy Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "The yen to work drops in flat economies",
		date: "2017",
    url: "quotes/the-yen-to-work-drops-in-flat-economies.html",
		content: "Writing in the 1950s Daniel Bell the great American sociologist said economic growth has become the secular religion of advancing industrial societies He was right It follows that in its absence many people lapse into the equivalent of atheism That sense of listlessness shows up in many ways In the labour market it means falling rates of workforce participation Much as the desire to worship falls in agnostic societies the yen to work drops in flat economies In the last decade America s share of people in full time jobs has dropped to European levels which used to be written off as a sclerotic consequence of the continent s over regulated labour markets Now the US rate is bang on the European average In some respects it is worse There is now a higher share of French males in full time jobs than Americans a statistic that reflects poorly on America rather than well on France Edward Luce English journalist and the *Financial Times* chief US commentator The Retreat of Western Liberalism "
	},
	{
		title: "Cultural, as opposed to biological, evolution",
		date: "1989",
    url: "quotes/cultural-as-opposed-to-biological-evolution.html",
		content: "Our capacity through language to manipulate the mental world and so deal imaginatively with the world of experience has been a major factor perhaps the major factor in giving humans the overwhelming advantage over other species in terms of cultural as opposed to biological evolution Edwin G. Pulleyblank Canadian sinologist and professor at the University of British Columbia Studies in Language Origins "
	},
	{
		title: "Great minds discuss ideas",
		date: "",
    url: "quotes/great-minds-discuss-ideas.html",
		content: "Great minds discuss ideas average ones discuss events and small minds discuss people Eleanor Roosevelt  unknown "
	},
	{
		title: "When old men plant trees",
		date: "1951",
    url: "quotes/when-old-men-plant-trees.html",
		content: "A man has made at least a start on discovering the meaning of human life when he plants shade trees under which he knows full well he will never sit Elton Trueblood noted 20th-century American Quaker author and theologian The Life We Prize "
	},
	{
		title: "An agenda of ambition and hope",
		date: "1 Dec 2022",
    url: "quotes/an-agenda-of-ambition-and-hope.html",
		content: "This spirit of fraternity must enable us to build an agenda of ambition and hope as our two countries share the same faith in freedom in democratic values in empowerment through education and work and in progress through science and knowledge Emmanuel Macron French politician who has served as President of France Macron Remarks on 1-Dec-2022 "
	},
	{
		title: "What we need for happiness",
		date: "1997",
    url: "quotes/what-we-need-for-happiness.html",
		content: "And what are our needs for happiness We need to walk just as birds need to fly We need to be around other people We need beauty We need contact with nature And most of all we need not to be excluded We need to feel some sort of equality Enrique Peñalosa A Colombian politician  "
	},
	{
		title: "Great public space is a kind of magical good",
		date: "2013",
    url: "quotes/great-public-space-is-a-kind-of-magical-good.html",
		content: "Most things that people buy in stores give them a lot of satisfaction the moment they buy them But after a few days that satisfaction decreases and months later it completely melts away But great public space is a kind of magical good It never ceases to yield happiness It s almost happiness itself Enrique Peñalosa A Colombian politician Happy City: Transforming our Lives through Urban Design "
	},
	{
		title: "Television mesmerizes people",
		date: "2016",
    url: "quotes/television-mesmerizes-people.html",
		content: "The boob tube turns you into a boob Television mesmerizes people and turns them into intellectual spectators It feeds passivity and makes you less engaged Eric Braverman president of Path Foundation NY Fast Company "
	},
	{
		title: "Mass Movements and Boredom",
		date: "1951",
    url: "quotes/mass-movements-and-boredom.html",
		content: "There is perhaps no more reliable indicator of a society s ripeness for a mass movement than the prevalence of unrelieved boredom In almost all the descriptions of the periods preceding the rise of mass movements there is reference to vast ennui and in their earliest stages mass movements are more likely to find sympathizers among the bored than among the exploited and suppressed To a deliberate fomenter of mass upheavals the report that people are bored stiff should be at least as encouraging as that they are suffering from intolerable economic or political abuses Eric Hoffer American moral and social philosopher The True Believer: Thoughts on the Nature of Mass Movements "
	},
	{
		title: "The productive orientation is expressed in love",
		date: "1956",
    url: "quotes/the-productive-orientation-is-expressed-in-love.html",
		content: "In the realm of feeling the productive orientation is expressed in love which is the experience of union with another person with all men and with nature under the condition of retaining one s sense of integrity and independence In the experience of love the paradox happens that two people become one and remain two at the same time Love in this sense is never restricted to one person If I can love only one person and nobody else if my love for one person makes me more alienated and distant from my fellow man I may be attached to this person in any number of ways yet I do not love Erich Fromm humanistic philosopher and psychologist The Sane Society "
	},
	{
		title: "Gradually and then suddenly",
		date: "1926",
    url: "quotes/gradually-and-then-suddenly.html",
		content: " How did you go bankrupt Bill asked Two ways Mike said Gradually and then suddenly Ernest Hemingway American novelist, short story writer, and journalist The Sun Also Rises "
	},
	{
		title: "My brain felt hungry",
		date: "07 Aug 2022",
    url: "quotes/my-brain-felt-hungry.html",
		content: "That s how my brain felt to me too Hungry Needy Itchy Once it wanted information But then it was distraction And then with social media validation A drumbeat of You exist You are seen Ezra Klein American journalist, political analyst, columnist and podcaster I Didn’t Want It to Be True, but the Medium Really Is the Message "
	},
	{
		title: "The post-materialist turn in global politics",
		date: "12 Nov 2022",
    url: "quotes/the-post-materialist-turn-in-global-politics.html",
		content: "The cultural backlash theory comes from the political scientists Pippa Norris and Ron Inglehart Inglehart who died last year is famous for tracking the post materialist turn in global politics Starting around the 1970s generations raised in relative affluence began to care less about traditional economic issues and more about questions of personal autonomy and social values The core fights of politics turned away from the distribution of money to the preservation of the environment and women s bodily autonomy and marriage equality These changes were generational and they ve moved steadily from the margins of politics to the center That s led to a backlash among those opposed to or simply disoriented by the speed at which social mores are shifting and the rise in countries all over the world of a post materialist right That s led to a slew of right wing parties that care more about culture and identity than tax cuts and deregulation Ezra Klein American journalist, political analyst, columnist and podcaster Three Theories That Explain This Strange Moment "
	},
	{
		title: "A First-Rate Intelligence",
		date: "1936",
    url: "quotes/a-first-rate-intelligence.html",
		content: "The test of a first rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function One should for example be able to see that things are hopeless yet be determined to make them otherwise F. Scott Fitzgerald  The Crack-Up "
	},
	{
		title: "The people are what matter to government",
		date: "",
    url: "quotes/the-people-are-what-matter-to-government.html",
		content: "The people are what matter to government and a government should aim to give all the people under its jurisdiction the best possible life Frances Perkins   "
	},
	{
		title: "To end up here in a pile of bones",
		date: "1984",
    url: "quotes/to-end-up-here-in-a-pile-of-bones.html",
		content: "Not until we showed them some of the stuff we got at Dachau that George Stevens photographed with his crew did it actually impinge itself on the mind of the horror the horror of this whole thing Man the highest of all the animals the Man who created God to end up here in a pile of bones burned it left me just speechless colorless bloodless I couldn t possibly believe that there was this kind of savagery in the world you see Frank Capra  Bill Moyers "
	},
	{
		title: "Price of Success",
		date: "",
    url: "quotes/price-of-success.html",
		content: "I know the price of success dedication hard work and an unremitting devotion to the things you want to see happen Frank Lloyd Wright American architect, designer, writer, and educator unknown "
	},
	{
		title: "Stakeholder Capitalism",
		date: "",
    url: "quotes/stakeholder-capitalism.html",
		content: "The job of management is to maintain an equitable and working balance among the claims of the various directly affected interest groups stockholders employees customers and the public at large Frank W. Abrams American industrialist  "
	},
	{
		title: "But above all, try something",
		date: "1932",
    url: "quotes/but-above-all-try-something.html",
		content: "The country needs and unless I mistake its temper the country demands bold persistent experimentation It is common sense to take a method and try it if it fails admit it frankly and try another But above all try something Franklin D. Roosevelt an American politician and attorney who served as the 32nd president of the United States FDR Address at Oglethorpe University in Atlanta, Georgia "
	},
	{
		title: "Government has a final responsibility for the well-being of its citizenship",
		date: "3 Jan 1938",
    url: "quotes/government-has-a-final-responsibility-for-the-well-being-of-its-citizenship.html",
		content: "Government has a final responsibility for the well being of its citizenship If private cooperative endeavor fails to provide work for willing hands and relief for the unfortunate those suffering hardship from no fault of their own have a right to call upon the Government for aid and a government worthy of its name must make fitting response Franklin D. Roosevelt an American politician and attorney who served as the 32nd president of the United States State of the Union 1938 "
	},
	{
		title: "God and Morality",
		date: "2013",
    url: "quotes/god-and-morality.html",
		content: "It wasn t God who introduced us to morality rather it was the other way around God was put into place to help us live the way we felt we ought to Frans de Waal  The Bonobo and the Atheist "
	},
	{
		title: "A Why to Live",
		date: "1888",
    url: "quotes/a-why-to-live.html",
		content: "He who has a why to live can bear almost any how Friedrich Nietzsche German philosopher Twilight of the Idols "
	},
	{
		title: "A burst of astonishment at our own existence",
		date: "",
    url: "quotes/a-burst-of-astonishment-at-our-own-existence.html",
		content: "No man knows how much he is an optimist even when he calls himself a pessimist because he has not really measured the depths of his debt to whatever created him and enabled him to call himself anything At the back of our brains there is a forgotten blaze or burst of astonishment at our own existence The object of the artistic and spiritual life is to dig for this submerged sunrise of wonder so that a man sitting in a chair might suddenly understand that he is actually alive and be happy G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic  "
	},
	{
		title: "A miraculous world",
		date: "",
    url: "quotes/a-miraculous-world.html",
		content: "What was wonderful about childhood is that anything in it was a wonder It was not merely a world full of miracles it was a miraculous world G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic  "
	},
	{
		title: "No true patriot",
		date: "",
    url: "quotes/no-true-patriot.html",
		content: " My country right or wrong is a thing that no true patriot would think of saying It is like saying My mother drunk or sober G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic  "
	},
	{
		title: "We are in Eden still",
		date: "",
    url: "quotes/we-are-in-eden-still.html",
		content: "There runs a strange law through the length of human history that men are continually tending to undervalue their environment to undervalue their happiness to undervalue themselves The great sin of mankind the sin typified by the fall of Adam is the tendency not towards pride but towards this weird and horrible humility This is the great fall the fall by which the fish forgets the sea the ox forgets the meadow the clerk forgets the city every man forgets his environment and in the fullest and most literal sense forgets himself This is the real fall of Adam and it is a spiritual fall It is a strange thing that many truly spiritual men such as General Gordon have actually spent some hours in speculating upon the precise location of the Garden of Eden Most probably we are in Eden still It is only our eyes that have changed G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic unknown "
	},
	{
		title: "The cause which is blocking all progress",
		date: "1902",
    url: "quotes/the-cause-which-is-blocking-all-progress.html",
		content: "The cause which is blocking all progress today is the subtle scepticism which whispers in a million ears that things are not good enough to be worth improving If the world is good we are revolutionaries if the world is evil we must be conservatives These essays futile as they are considered as serious literature are yet ethically sincere since they seek to remind men that things must be loved first and improved afterwards G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic The Defendant "
	},
	{
		title: "The center of every man's existence is a dream",
		date: "1903",
    url: "quotes/the-center-of-every-mans-existence-is-a-dream.html",
		content: "The center of every man s existence is a dream Death disease insanity are merely material accidents like a toothache or a twisted ankle That these brutal forces always besiege and often capture the citadel does not prove that they are the citadel G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic Twelve Types "
	},
	{
		title: "Mysticism has kept men sane",
		date: "1903",
    url: "quotes/mysticism-has-kept-men-sane.html",
		content: "The truth is that Tolstoy with his immense genius with his colossal faith with his vast fearlessness and vast knowledge of life is deficient in one faculty and one faculty alone He is not a mystic and therefore he has a tendency to go mad Men talk of the extravagances and frenzies that have been produced by mysticism they are a mere drop in the bucket In the main and from the beginning of time mysticism has kept men sane The thing that has driven them mad was logic The only thing that has kept the race of men from the mad extremes of the convent and the pirate galley the night club and the lethal chamber has been mysticism the belief that logic is misleading and that things are not what they seem G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic Tolstoy "
	},
	{
		title: "This dazed and dramatic ignorance",
		date: "1903",
    url: "quotes/this-dazed-and-dramatic-ignorance.html",
		content: "One of the deepest and strangest of all human moods is the mood which will suddenly strike us perhaps in a garden at night or deep in sloping meadows the feeling that every flower and leaf has just uttered something stupendously direct and important and that we have by a prodigy of imbecility not heard or understood it There is a certain poetic value and that a genuine one in this sense of having missed the full meaning of things There is beauty not only in wisdom but in this dazed and dramatic ignorance G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic Robert Browning. "
	},
	{
		title: "The difference between construction and creation",
		date: "1911",
    url: "quotes/the-difference-between-construction-and-creation.html",
		content: "The whole difference between construction and creation is exactly this that a thing constructed can only be loved after it is constructed but a thing created is loved before it exists as the mother can love the unborn child G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic Appreciations and Criticisms of the Works of Charles Dickens "
	},
	{
		title: "Generosity Among the Rich",
		date: "1912",
    url: "quotes/generosity-among-the-rich.html",
		content: "Among the rich you will never find a really generous man even by accident They may give their money away but they will never give themselves away they are egotistic secretive dry as old bones To be smart enough to get all that money you must be dull enough to want it G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic A Miscellany of Men "
	},
	{
		title: "Conservatives and Progressives",
		date: "1924",
    url: "quotes/conservatives-and-progressives.html",
		content: "The whole modern world has divided itself into Conservatives and Progressives The business of Progressives is to go on making mistakes The business of Conservatives is to prevent mistakes from being corrected Even when the revolutionist might himself repent of his revolution the traditionalist is already defending it as part of his tradition Thus we have two great types the advanced person who rushes us into ruin and the retrospective person who admires the ruins He admires them especially by moonlight not to say moonshine Each new blunder of the progressive or prig becomes instantly a legend of immemorial antiquity for the snob This is called the balance or mutual check in our Constitution G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic Illustrated London News "
	},
	{
		title: "Taking a Fence Down",
		date: "1929",
    url: "quotes/taking-a-fence-down.html",
		content: "In the matter of reforming things as distinct from deforming them there is one plain and simple principle a principle which will probably be called a paradox There exists in such a case a certain institution or law let us say for the sake of simplicity a fence or gate erected across a road The more modern type of reformer goes gaily up to it and says I don t see the use of this let us clear it away To which the more intelligent type of reformer will do well to answer If you don t see the use of it I certainly won t let you clear it away Go away and think Then when you can come back and tell me that you do see the use of it I may allow you to destroy it G. K. Chesterton English writer, philosopher, lay theologian, and literary and art critic The Thing "
	},
	{
		title: "The point of modern propaganda",
		date: "12/13/2016",
    url: "quotes/the-point-of-modern-propaganda.html",
		content: "The point of modern propaganda isn t only to misinform or push an agenda It is to exhaust your critical thinking to annihilate truth Garry Kasparov Russian chess grandmaster, former World Chess Champion (1985–2000), political activist and writer. Twitter "
	},
	{
		title: "Art presents us with a window into the minds of these people",
		date: "15 Sep 2016",
    url: "quotes/art-presents-us-with-a-window-into-the-minds-of-these-people.html",
		content: "Art presents us with a window into the minds of these people that other types of artifacts just can t provide It offers us glimpses into their world their culture and their belief systems Genevieve von Petzinger Canadian paleoanthropologist and rock art researcher First Signs: Unlocking the Mysteries of the World's Oldest Symbols "
	},
	{
		title: "My Life Belongs to the Whole Community",
		date: "",
    url: "quotes/my-life-belongs-to-the-whole-community.html",
		content: "This is the true joy in life the being used for a purpose recognized by yourself as a mighty one the being a force of nature instead of a feverish selfish little clod of ailments and grievances complaining that the world will not devote itself to making you happy I am of the opinion that my life belongs to the whole community and as long as I live it is my privilege to do for it whatever I can I want to be thoroughly used up when I die for the harder I work the more I live I rejoice in life for its own sake Life is no brief candle for me It is a sort of splendid torch which I have got hold of for the moment and I want to make it burn as brightly as possible before handing it on to future generations George Bernard Shaw Irish playwright, critic, polemicist and political activist  "
	},
	{
		title: "Progress Depends on the Unreasonable Man",
		date: "1903",
    url: "quotes/progress-depends-on-the-unreasonable-man.html",
		content: "The reasonable man adapts himself to the world the unreasonable one persists in trying to adapt the world to himself Therefore all progress depends on the unreasonable man George Bernard Shaw Irish playwright, critic, polemicist and political activist Maxims for Revolutionists "
	},
	{
		title: "I Dream Things That Never Were",
		date: "1921",
    url: "quotes/i-dream-things-that-never-were.html",
		content: "You see things and you say Why But I dream things that never were and I say Why not George Bernard Shaw Irish playwright, critic, polemicist and political activist Back to Methuselah "
	},
	{
		title: "Politics and the Debasement of Language",
		date: "",
    url: "quotes/politics-and-the-debasement-of-language.html",
		content: "A scrupulous writer in every sentence that he writes will ask himself at least four questions thus What am I trying to say What words will express it What image or idiom will make it clearer Is this image fresh enough to have an effect And he will probably ask himself two more Could I put it more shortly Have I said anything that is avoidably ugly But you are not obliged to go to all this trouble You can shirk it by simply throwing your mind open and letting the ready made phrases come crowding in They will construct your sentences for you even think your thoughts for you to a certain extent and at need they will perform the important service of partially concealing your meaning even from yourself It is at this point that the special connection between politics and the debasement of language becomes clear George Orwell English novelist, essayist, journalist and critic Politics and the English Language "
	},
	{
		title: "Progress Depends on Retentiveness",
		date: "1906",
    url: "quotes/progress-depends-on-retentiveness.html",
		content: "Progress far from consisting in change depends on retentiveness When change is absolute there remains no being to improve and no direction is set for possible improvement and when experience is not retained as among savages infancy is perpetual Those who cannot remember the past are condemned to repeat it George Santayana A philosopher, essayist, poet, and novelist The Life of Reason: Reason in Common Sense "
	},
	{
		title: "Hard Discipline of Reasonableness and Honesty",
		date: "",
    url: "quotes/hard-discipline-of-reasonableness-and-honesty.html",
		content: "The great thing to remember is that the mind of man cannot be enlightened permanently by merely teaching him to reject some particular set of superstitions There is an infinite supply of other superstitions always at hand and the mind that desires such things that is the mind that has not trained itself to the hard discipline of reasonableness and honesty will as soon as its devils are cast out proceed to fill itself with their relations Gilbert Murray  Five Stages of Greek Religion "
	},
	{
		title: "Before I started school striking",
		date: "",
    url: "quotes/before-i-started-school-striking.html",
		content: "Before I started school striking I had no energy no friends and I didn t speak to anyone I just sat alone at home with an eating disorder All of that is gone now since I have found a meaning in a world that sometimes seems shallow and meaningless to so many people Greta Thunberg Swedish environmental activist  "
	},
	{
		title: "A book is a man's best friend",
		date: "",
    url: "quotes/a-book-is-a-mans-best-friend.html",
		content: "Outside of a dog a book is a man s best friend Inside of a dog it s too dark to read Groucho Marx   "
	},
	{
		title: "Every Third American",
		date: "1919",
    url: "quotes/every-third-american.html",
		content: "We are in fact a nation of evangelists every third American devotes himself to improving and lifting up his fellow citizens usually by force the messianic delusion is our national disease H. L. Mencken American journalist, essayist, satirist, cultural critic, and scholar of American English Prejudices: First Series "
	},
	{
		title: "Easy Solutions",
		date: "1920",
    url: "quotes/easy-solutions.html",
		content: "There is always an easy solution to every human problem neat plausible and wrong H. L. Mencken American journalist, essayist, satirist, cultural critic, and scholar of American English Prejudices: Second Series "
	},
	{
		title: "We Must Respect the Other Fellow's Religion",
		date: "1956",
    url: "quotes/we-must-respect-the-other-fellows-religion.html",
		content: "We must respect the other fellow s religion but only in the sense and to the extent that we respect his theory that his wife is beautiful and his children smart H. L. Mencken American journalist, essayist, satirist, cultural critic, and scholar of American English Minority Report : H.L. Mencken”s Notebooks "
	},
	{
		title: "Socialism is their name for anything that helps the people",
		date: "1952-10-10",
    url: "quotes/socialism-is-their-name-for-anything-that-helps-the-people.html",
		content: "Socialism is a scareword they have hurled at every advance the people have made in the last 20 years Socialism is what they called public power Socialism is what they called Social Security Socialism is what they called farm price supports Socialism is what they called bank deposit insurance Socialism is what they called the growth of free and independent labor organiztions Socialism is their name for almost anything that helps all the people Harry S. Truman 33rd president of the United States Campaign Speech "
	},
	{
		title: "The original naiveté",
		date: "Feb 18, 2017",
    url: "quotes/the-original-naiveté.html",
		content: "You study you learn but you guard the original naiveté It has to be within you as desire for drink is within the drunkard or love is within the lover Henri Matisse  Time Magazine "
	},
	{
		title: "Faster Horses",
		date: "",
    url: "quotes/faster-horses.html",
		content: "If I had asked people what they wanted they would have said faster horses Henry Ford  unknown "
	},
	{
		title: "This dear fucked-up planet",
		date: "1918",
    url: "quotes/this-dear-fucked-up-planet.html",
		content: "What are we here for if not to enjoy life eternal solve what problems we can give light peace and joy to our fellow man and leave this dear fucked up planet a little healthier than when we were born Henry Miller American writer and artist Memo to Self "
	},
	{
		title: "We bludgeon one another with facts and theories",
		date: "1945",
    url: "quotes/we-bludgeon-one-another-with-facts-and-theories.html",
		content: "We do not talk we bludgeon one another with facts and theories gleaned from cursory readings of newspapers magazines and digests Henry Miller American writer and artist The Air-Conditioned Nightmare "
	},
	{
		title: "Enemies of Art and Artist",
		date: "1957",
    url: "quotes/enemies-of-art-and-artist.html",
		content: "Men are not suffering from the lack of good literature good art good theatre good music but from that which has made it impossible for these to become manifest In short they are suffering from the silent shameful conspiracy the more shameful since it is unacknowledged which has bound them together as enemies of art and artist They are suffering from the fact that art is not the primary moving force in their lives They are suffering from the act repeated daily of keeping up the pretense that they can go their way lead their lives without art Henry Miller American writer and artist Big Sur and the Oranges of Hieronymus Bosch "
	},
	{
		title: "We All Derive From the Same Source",
		date: "1964",
    url: "quotes/we-all-derive-from-the-same-source.html",
		content: "Every day we slaughter our finest impulses That is why we get a heartache when we read those lines written by the hand of a master and recognize them as our own as the tender shoots which we stifled because we lacked the faith to believe in our own powers our own criterion of truth and beauty Every man when he gets quiet when he becomes desperately honest with himself is capable of uttering profound truths We all derive from the same source there is no mystery about the origin of things We are all part of creation all kings all poets all musicians we have only to open up only to discover what is already there Henry Miller American writer and artist Henry Miller on Writing "
	},
	{
		title: "On Turning Eighty",
		date: "1972",
    url: "quotes/on-turning-eighty.html",
		content: "If at eighty you re not a cripple or an invalid if you have your health if you still enjoy a good walk a good meal with all the trimmings if you can sleep without first taking a pill if birds and flowers mountains and sea still inspire you you are a most fortunate individual and you should get down on your knees morning and night and thank the good Lord for his savin and keepin power If you are young in years but already weary in spirit already on the way to becoming an automaton it may do you good to say to your boss under your breath of course Fuck you Jack You don t own me If you can fall in love again and again if you can forgive your parents for the crime of bringing you into the world if you are content to get nowhere just take each day as it comes if you can forgive as well as forget if you can keep from growing sour surly bitter and cynical man you ve got it half licked Henry Miller American writer and artist On Turning Eighty "
	},
	{
		title: "Capitalists who worship only at the feet of capitalism",
		date: "",
    url: "quotes/capitalists-who-worship-only-at-the-feet-of-capitalism.html",
		content: "Democratic capitalism is a wonderful device precisely because it maximizes the ability of individuals within society to singly and collectively pursue the ends that <em>they< em> find to be important and meaningful the accomplishments of a capitalistic society are noble and grand to the extent that the ends pursued by its individuals aspire to these lofty goals and bereft to the extent that the intentions of its citizens are mean and unworthy nothing makes capitalism appear more hollow than capitalists who worship only at the feet of capitalism they are like workmen who have fallen in love with their tools while blind to the glories of the cathedrals these tools have built and can yet build Herb Bowie American author and software developer unknown "
	},
	{
		title: "Having Fewer Children and Grandchildren",
		date: "",
    url: "quotes/having-fewer-children-and-grandchildren.html",
		content: "On the subject of climate change I think we need to not only think of what sort of planet we will be leaving to our children and grandchildren but start to think about leaving fewer children and grandchildren for our planet to have to sustain We cannot stop and reverse climate change if the human population of the planet continues to climb in fact it is exceedingly improbably that we can save our planet while maintaining the same number of people we have alive today Herb Bowie American author and software developer unknown "
	},
	{
		title: "The Tautness of this Resonant Connection",
		date: "2010",
    url: "quotes/the-tautness-of-this-resonant-connection.html",
		content: "No matter what the form all art seems to produce a similar sensation of timelessness of implicit order of connectedness It is as if the work of art had sounded some deep note and caused sympathetic vibration in a hidden string a string whose one end is secured in the human heart and from there ascends towards some unknowable summit the existence of the termination point affirmed only by the tautness of this resonant connection Herb Bowie American author and software developer Reason to Rock: Rock Music as Art Form "
	},
	{
		title: "The pulse of nature",
		date: "1904",
    url: "quotes/the-pulse-of-nature.html",
		content: "I wanted to teach people to listen to the pulse of nature to partake of the wholeness of life and not forget under the pressure of their petty destinies that we are not gods and have not created ourselves but are children of the earth part of the cosmos Hermann Hesse German-Swiss poet, novelist, and painter Peter Camenzind "
	},
	{
		title: "Social media is hyperactive",
		date: "10 Nov 2022",
    url: "quotes/social-media-is-hyperactive.html",
		content: "The terms social network and social media are used interchangeably now but they shouldn t be A social network is an idle inactive system a Rolodex of contacts a notebook of sales targets a yearbook of possible soul mates But social media is active hyperactive really spewing material across those networks instead of leaving them alone until needed Ian Bogost  The Age of Social Media Is Ending "
	},
	{
		title: "The dullness of fact",
		date: "1962",
    url: "quotes/the-dullness-of-fact.html",
		content: "The dullness of fact is the mother of fiction Isaac Asimov  Fact and Fancy "
	},
	{
		title: "The Cult of Ignorance",
		date: "1975",
    url: "quotes/the-cult-of-ignorance.html",
		content: "There is a cult of ignorance in the United States and there always has been The strain of anti intellectualism has been a constant thread winding its way through our political and cultural life nurtured by the false notion that democracy means that my ignorance is just as good as your knowledge Isaac Asimov  The Magazine of Fantasy and Science Fiction "
	},
	{
		title: "The universe is queerer than we can suppose",
		date: "1927",
    url: "quotes/the-universe-is-queerer-than-we-can-suppose.html",
		content: "Now my own suspicion is that the universe is not only queerer than we suppose but queerer than we can suppose J. B. S. Haldane British-Indian scientist Possible Worlds and Other Essays "
	},
	{
		title: "A strange magic in human-made things",
		date: "2021-12-24",
    url: "quotes/a-strange-magic-in-human-made-things.html",
		content: "There can be a strange magic in human made things Not in all of them not in plastic bottles or Q Tips or batteries but in those that are interwoven with our pasts with our homes with our great loves These are things that have been mysteriously imbued with humanity our own or other people s J. K. Rowling British author, philanthropist, film producer, and screenwriter J. K. Rowling on the Magic of 'Things' "
	},
	{
		title: "The Golden Eternity",
		date: "",
    url: "quotes/the-golden-eternity.html",
		content: "I have lots of things to teach you now in case we ever meet concerning the message that was transmitted to me under a pine tree in North Carolina on a cold winter moonlit night It said that Nothing Ever Happened so don t worry It s all like a dream Everything is ecstasy inside We just don t know it because of our thinking minds But in our true blissful essence of mind is known that everything is alright forever and forever and forever Close your eyes let your hands and nerve ends drop stop breathing for 3 seconds listen to the silence inside the illusion of the world and you will remember the lesson you forgot which was taught in immense milky way soft cloud innumerable worlds long ago and not even at all It is all one vast awakened thing I call it the golden eternity It is perfect Jack Kerouac American novelist and pioneer of the Beat Generation The Portable Jack Kerouac "
	},
	{
		title: "Practice kindness all day to everybody",
		date: "1957",
    url: "quotes/practice-kindness-all-day-to-everybody.html",
		content: "The world you see is just a movie in your mind Rocks don t see it Bless and sit down Forgive and forget Practice kindness all day to everybody and you will realize you re already in heaven now That s the story That s the message Nobody understands it nobody listens they re all running around like chickens with heads cut off I will try to teach it but it will be in vain s why I ll end up in a shack praying and being cool and singing by my woodstove making pancakes Jack Kerouac American novelist and pioneer of the Beat Generation The Portable Jack Kerouac "
	},
	{
		title: "Shareholder Value",
		date: "",
    url: "quotes/shareholder-value.html",
		content: "On the face of it shareholder value is the dumbest idea in the world Shareholder value is a result not a strategy your main constituencies are your employees your customers and your products Managers and investors should not set share price increases as their overarching goal Short term profits should be allied with an increase in the long term value of a company Jack Welch  Interview with Francesco Guerrera of the Financial Times "
	},
	{
		title: "The way the hammer shapes the hand",
		date: "2002",
    url: "quotes/the-way-the-hammer-shapes-the-hand.html",
		content: "Camera crews search for clues amid the detritus And entertainment shapes the land The way the hammer shapes the hand Jackson Browne  Casino Nation "
	},
	{
		title: "You are going to have to make it different",
		date: "1979",
    url: "quotes/you-are-going-to-have-to-make-it-different.html",
		content: "I once addressed on a Christmas day many years ago on behalf of the United Nations an audience of about two thousand school children in London As on this occasion I knew in general what I was going to say but I did not know exactly what I was going to say and in a moment of abandon I said to them This is how the world goes you are going to have to make it different you are going to have to stop listening to your parents If you go on obeying your parents the world will never be a better place And at that moment twenty newspaper men representing the European press got up from the front row and rushed for the telephone boxes And by the time I got home one of the more adventurous correspondents from Geneva had actually phoned my daughter then aged seven at school in order to ask her whether she was encouraged to disobey her parents at home Jacob Bronowski  The Origins of Knowledge and Imagination "
	},
	{
		title: "Education demands a certain daring",
		date: "1961",
    url: "quotes/education-demands-a-certain-daring.html",
		content: "Education demands a certain daring a certain independence of mind We have to teach young people to think And to teach young people in order to teach young people to think you have to teach them to think about everything There mustn t be something they cannot think about If there s something if there s one thing they can t think about then very shortly they can t think about anything you know Now there s always something in this country of course one cannot think about James Baldwin American novelist, playwright, essayist, poet and activist 1961 Studs Terkel Interview with James Baldwin "
	},
	{
		title: "Larger, freer, and more loving",
		date: "1962",
    url: "quotes/larger-freer-and-more-loving.html",
		content: "If the concept of God has any validity or any use it can only be to make us larger freer and more loving If God cannot do this then it is time we got rid of Him James Baldwin American novelist, playwright, essayist, poet and activist Letter from a Region of My Mind "
	},
	{
		title: "White people will have quite enough to do",
		date: "1962",
    url: "quotes/white-people-will-have-quite-enough-to-do.html",
		content: "I do not know many Negroes who are eager to be accepted by white people still less to be loved by them they the blacks simply don t wish to be beaten over the head by the whites every instant of our brief passage on this planet White people will have quite enough to do in learning how to accept and love themselves and each other and when they have achieved this which will not be tomorrow and may very well be never the Negro problem will no longer exist for it will no longer be needed James Baldwin American novelist, playwright, essayist, poet and activist Letter from a Region of My Mind "
	},
	{
		title: "The moment we cease to hold each other",
		date: "1964",
    url: "quotes/the-moment-we-cease-to-hold-each-other.html",
		content: "For nothing is fixed forever and forever it is not fixed the earth is always shifting the light is always changing the sea does not cease to grind down rock Generations do not cease to be born and we are responsible to them because we are the only witnesses they have The sea rises the light fails lovers cling to each other and children cling to us The moment we cease to hold each other the moment we break faith with one another the sea engulfs us and the light goes out James Baldwin American novelist, playwright, essayist, poet and activist Nothing Personal "
	},
	{
		title: "Any Love for Justice",
		date: "1972",
    url: "quotes/any-love-for-justice.html",
		content: "Well if one really wishes to know how justice is administered in a country one does not question the policemen the lawyers the judges or the protected members of the middle class One goes to the unprotected those precisely who need the law s protection most and listens to their testimony Ask any Mexican any Puerto Rican any black man any poor person ask the wretched how they fare in the halls of justice and then you will know not whether or not the country is just but whether or not it has any love for justice or any concept of it It is certain in any case that ignorance allied with power is the most ferocious enemy justice can have James Baldwin American novelist, playwright, essayist, poet and activist No Name in the Street "
	},
	{
		title: "An emotional poverty so bottomless",
		date: "1972",
    url: "quotes/an-emotional-poverty-so-bottomless.html",
		content: "I have always been struck in America by an emotional poverty so bottomless and a terror of human life of human touch so deep that virtually no American appears able to achieve any viable organic connection between his public stance and his private life James Baldwin American novelist, playwright, essayist, poet and activist No Name in the Street "
	},
	{
		title: "Frivolous and fanciful distinctions",
		date: "1787",
    url: "quotes/frivolous-and-fanciful-distinctions.html",
		content: "So strong is this propensity of mankind to fall into mutual animosities that where no substantial occasion presents itself the most frivolous and fanciful distrinctions have been sufficient to kindle their unfriendly passions and excite their most violent conflicts James Madison American statesman, diplomat, expansionist, philosopher, and Founding Father who served as the fourth president of the United States The Federalist no. 10 "
	},
	{
		title: "Invest in your employees",
		date: "5 Oct 2021",
    url: "quotes/invest-in-your-employees.html",
		content: "I give them other business owners the same advice my grandfather had when he was starting the business Dick s Drive Ins A business first step is it has to make a profit The next step is to invest in your employees They ll take better care of your customers which will help you earn more profit When they move on from your business and do other things they re evangelists for your company and that helps you make more profit Once that virtuous cycle is going you can also invest in your community because if your community is thriving your business will thrive And so for these businesses that come to us asking what they should do first the biggest thing I tell them is to talk to your employees Ask them what it is that your employee population would want Talk to them Start with that And if you can t do it for everybody or everything that they would want just do some part of it then work your way up from there Jasmine Donovan President & CFO at Dick's Drive-In Restaurants How does Dick’s Drive-In pay workers $19 an hour with a menu completely under $5? "
	},
	{
		title: "Reversible vs. Irreversible Decisions",
		date: "1999",
    url: "quotes/reversible-vs-irreversible-decisions.html",
		content: "Some decisions are consequential and irreversible or nearly irreversible one way doors and these decisions must be made methodically carefully slowly with great deliberation and consultation If you walk through and don t like what you see on the other side you can t get back to where you were before We can call these Type 1 decisions But most decisions aren t like that they are changeable reversible they re two way doors If you ve made a suboptimal Type 2 decision you don t have to live with the consequences for that long You can reopen the door and go back through Type 2 decisions can and should be made quickly by high judgment individuals or small groups As organizations get larger there seems to be a tendency to use the heavy weight Type 1 decision making process on most decisions including many Type 2 decisions The end result of this is slowness unthoughtful risk aversion failure to experiment sufficiently and consequently diminished invention We ll have to figure out how to fight that tendency Jeff Bezos American internet entrepreneur, industrialist, media proprietor, and investor Amazon Letter to Shareholders "
	},
	{
		title: "You have to create more than you consume",
		date: "15 Apr 2021",
    url: "quotes/you-have-to-create-more-than-you-consume.html",
		content: "If you want to be successful in business in life actually you have to create more than you consume Your goal should be to create value for everyone you interact with Any business that doesn t create value for those it touches even if it appears successful on the surface isn t long for this world It s on the way out Jeff Bezos American internet entrepreneur, industrialist, media proprietor, and investor 2020 Letter to Shareholders "
	},
	{
		title: "Seeing the Bigger Picture from Multiple Angles",
		date: "Sep 21, 2015",
    url: "quotes/seeing-the-bigger-picture-from-multiple-angles.html",
		content: "He Jeff Bezos said people who were right a lot of the time <em>were people who often changed their minds< em> He doesn t think consistency of thought is a particularly positive trait It s perfectly healthy encouraged even to have an idea tomorrow that contradicted your idea today He s observed that the smartest people are constantly revising their understanding reconsidering a problem they thought they d already solved They re open to new points of view new information new ideas contradictions and challenges to their own way of thinking This doesn t mean you shouldn t have a well formed point of view but it means you should consider your point of view as temporary What trait signified someone who was <em>wrong< em> a lot of the time Someone obsessed with details that only support one point of view If someone can t climb out of the details and see the bigger picture from multiple angles they re often wrong most of the time Jeff Bezos and Jason Fried  Signal vs. Noise "
	},
	{
		title: "All of us are trim tabs",
		date: "06 Jan 2019",
    url: "quotes/all-of-us-are-trim-tabs.html",
		content: "One guy he had nothing to do with the movies but I ve taken a lot of direction from him That s Bucky Fuller Bucky he s most famous for the geodesic dome but he made a great observation about these oceangoing tankers And he noticed that the engineers were particularly challenged by how to turn this thing you know They got this big rudder it took too much energy to turn the rudder to turn the ship So they came up with a brilliant idea Let s put a little rudder on the big rudder The little rudder will turn the big rudder the big rudder will turn the ship The little rudder is called a trim tab Bucky made the analogy that a trim tab is an example of how the individual is connected to society and how we affect society And I like to think of myself as a trim tab All of us are trim tabs We might seem like we re not up to the task but we are man We re alive We can make a difference We can turn this ship in the way we wanna go man Towards love creating a healthy planet for all of us Jeff Bridges American actor, singer, and producer Golden Globes Speech "
	},
	{
		title: "Questioning one's habitual ways of seeing",
		date: "2019",
    url: "quotes/questioning-ones-habitual-ways-of-seeing.html",
		content: "To me the only habit worth designing for is the habit of questioning one s habitual ways of seeing and that is what artists writers and musicians help us to do It s in the realm of poetics that we learn how to encounter Significantly these encounters are not optimized to empower us by making us happier or more productive In fact they may actually completely unsettle the priorities of the productive self and even the boundaries between self and other Rather than providing us with drop down menus they confront us with serious questions the answering of which may change us irreversibly Jenny Odell American multidisciplinary artist, writer, and educator How to Do Nothing: Resisting the Attention Economy "
	},
	{
		title: "Thou shalt love thy neighbour as thyself",
		date: "",
    url: "quotes/thou-shalt-love-thy-neighbour-as-thyself.html",
		content: "Thou shalt love thy neighbour as thyself Jesus  King James Bible "
	},
	{
		title: "The only thing that's constant there is other people",
		date: "2019",
    url: "quotes/the-only-thing-thats-constant-there-is-other-people.html",
		content: "This is part of the model that we ve developed called the social baseline model When you average everything out that humans have experienced over millennia the only thing that s constant is other humans We re so adaptable we ve been to so many places we live in the arctic and the equator We eat whale blubber and unrefined grains We ve been to the moon and practically at the bottom of the ocean The only thing that s constant there is other people Jim Coan Clinical Psychologist at the University of Virginia This View of Life: Completing the Darwinian Revolution "
	},
	{
		title: "Bringing the worldview associated with sports-talk radio to politics",
		date: "4 Jan 2023",
    url: "quotes/bringing-the-worldview-associated-with-sports-talk-radio-to-politics.html",
		content: "Getting a lot more Americans interested in politics is not the same as getting a lot more Americans knowledgeable about the workings of democracy or government It has brought the worldview associated with sports talk radio to politics you ve got a team and you want that team to win and the other team is always the worst and the refs are always unfairly treating your side Heaven forbid you concede that the other team played a better game Jim Geraghty senior political correspondent of National Review and author of several books How did politics get so awful? I blame MTV circa 1992. "
	},
	{
		title: "Lean",
		date: "Feb. 16, 2010",
    url: "quotes/lean.html",
		content: " Creating ever more value for customers with ever fewer resources is all I have ever meant by lean Jim Womack  eLetter "
	},
	{
		title: "Between Saturday night and Sunday morning",
		date: "1994",
    url: "quotes/between-saturday-night-and-sunday-morning.html",
		content: "Oh there s a thin line between Saturday night and Sunday morning Jimmy Buffet  Fruitcakes "
	},
	{
		title: "Chaos and Mediocrity",
		date: "2006",
    url: "quotes/chaos-and-mediocrity.html",
		content: "Is this one legacy of the sixties That after flinging open the doors to a world previously known only at the margins of society the pioneers would move on leaving the masses to add drugs to the myriad forces pulling our society towards chaos and mediocrity Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "Counter-Culture's own values and aesthetics decayed",
		date: "2006",
    url: "quotes/counter-cultures-own-values-and-aesthetics-decayed.html",
		content: "Beneath the surface the progressive sixties hid all manner of unpleasantness sexism reaction racism and factionalism It wasn t surprising really The idea that drugs sex and music could transform the world was always a pretty naïve dream As the counter culture s effect on the mainstream grew its own values and aesthetics decayed The political setbacks of the coming years grabbed the headlines while the dilution of ideals happened more quietly but nonetheless vividly for those who noticed Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "History as Postmodern Collage",
		date: "2006",
    url: "quotes/history-as-postmodern-collage.html",
		content: "Sitting in Princeteon listening to old records we became obsessed with the past We tried to pierce the veil of time and grasp what it sounded felt looked and smelled like In Harvard Square and London I met many with similar preoccupations they didn t seem unusual at all When old blues singers began to reappear it delivered a rush of excitement and adrenalin Meeting and traveling with Gary Davis and Lonnie Johnson even Coleman Hawkins armoured me against a host of disappointments History today seems more like a postmodern collage we are surrounded by two dimensional representations of our heritage Access via Amazon com or iPod to all those boxed sets of old blues singers or Nick Drake for that matter doesn t equate with the sense of discovery and connection we experienced Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "Little I recognized as music",
		date: "2006",
    url: "quotes/little-i-recognized-as-music.html",
		content: "Thirty years after Brighton I walked sadly away from the New Orleans Jazz amp Heritage Fair It was everything my twenty one year old self might have dreamed of 75 000 people packed into the Fairgrounds with NPR subscriber bags holding expertly marked programmes America s black musical heritage was on parade across two long weekends and eight stages But the audience was almost entirely white The performers had learned their lessons dropping any modernizations or slick showbiz gestures and recreating the old time styles the sophisticated audiences craved On one level it demonstrated respect for a deep culture and a rejection of shallow novelty But removed from the soil in which it grew the music felt lifeless like actors portraying characters who happened to be their younger selves In two days wandering from stage to stage I heard little I recognized as music Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "Never Knew Cocaine to Improve Anything",
		date: "2006",
    url: "quotes/never-knew-cocaine-to-improve-anything.html",
		content: "I listened in the studio control room as musicians modes of consciousness alteration proceeded from grass hash and acid to heroin and cocaine by the 1970s All but the latter could on occasion provide benefits at least to the music I never knew cocaine to improve anything I suspect that the surge in cocaine s popularity explains at least in part why so many great sixties artists made such bad records in the following decade Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "Records we made together in the sixties",
		date: "2006",
    url: "quotes/records-we-made-together-in-the-sixties.html",
		content: "These days most engineers confronted with a displeasing sound reach for the knobs on the console and tweak the high mid or low frequencies When that process is inflicted on more and more tracks of a multi channel recording the sound passes through dozens of transistors resulting in a narrower more confined sound With the added limitations of digital sound you end up with a bright and shiny thin and two dimensional recording To my ears anyway When John Wood heard a sound he didn t like he would lift his bulky frame off the chair and lumber down the stairs muttering all the way I began to be able to predict whether he was going to try a different microphone reposition the existing one or shift the offending musician to another part of the studio When I listen to records we made together in the sixties I can still hear the air in the studio and the full dimension of the sounds the musicians created for us I can hear the depth of Nick Drake s breath as well as his voice the grit in the crude strings of Robin Williamson s <cite>gimbri< cite> and Dave Mattacks drum technique spread out warmly in aural Technicolor across the stereo spectrum Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "Sixties Surpluses of Money and Time",
		date: "2006",
    url: "quotes/sixties-surpluses-of-money-and-time.html",
		content: "The atmosphere in which music flourished then had a lot to do with economics It was a time of unprecedented prosperity People are supposedly wealthier now yet most feel they haven t enough money and time is at an even greater premium In the sixties we had surpluses of both money and time Friends of mine lived comfortably in Greenwich Village Harvard Square Bayswater Santa Monica and on the Left Bank and were by current standards broke Yet they survived easily on occasional coffee house gigs or part time work Today urbanites must feverishly maximize their economic potential just to maintain a small flat in Hoboken Somerville Hackney Korea Town or Belleville The economy of the sixties cut us a lot of slack leaving time to travel take drugs write songs and rethink the universe Joe Boyd  White Bicycles: Making Music in the 1960s "
	},
	{
		title: "Play is a thing on its own",
		date: "1938",
    url: "quotes/play-is-a-thing-on-its-own.html",
		content: "The incidence of play is not associated with any particular stage of civilization or view of the universe Any thinking person can see at a glance that play is a thing on its own even if his language possesses no general concept to express it Play cannot be denied You can deny if you like nearly all abstractions justice beauty truth goodness mind God You can deny seriousness but not play Johan Huizinga Dutch historian Homo Ludens: A Study of the Play-Element in Culture "
	},
	{
		title: "I must study politics and war",
		date: "May 12, 1780",
    url: "quotes/i-must-study-politics-and-war.html",
		content: "I must study politics and war that our sons may have liberty to study mathematics and philosophy Our sons ought to study mathematics and philosophy geography natural history and naval architecture navigation commerce and agriculture in order to give their children a right to study painting poetry music architecture statuary tapestry and porcelain John Adams American statesman, attorney, diplomat, writer, and Founding Father who served as the second president of the United States Letter to Abigail Adams "
	},
	{
		title: "We Need a Place to Stand",
		date: "",
    url: "quotes/we-need-a-place-to-stand.html",
		content: "Researching my latest book Fourth and Long I met Dr Ed Zeiders the pastor of St Paul s United Methodist Church in State College He has seen what a college football team can do for a community in ways others might not We are desperately needy he told me We need a place to stand and a people to stand with and a cause to stand for That is not original with me That came out of World Methodism And those three propositions hold the key to healthy and value oriented living Our culture is devoid of these things John Bacon and Ed Zeiders  Fourth and Long "
	},
	{
		title: "Moral Sawdust",
		date: "1939",
    url: "quotes/moral-sawdust.html",
		content: "At some period in this person s growth certain brain tissues had died and turned to moral sawdust John Dickson Carr and Cecil Street  Fatal Descent "
	},
	{
		title: "National parks and reserves",
		date: "",
    url: "quotes/national-parks-and-reserves.html",
		content: "The supreme reality of our time is the vulnerability of our planet National parks and reserves are an integral aspect of intelligent use of natural resources It is the course of wisdom to set aside an ample portion of our natural resources as national parks and reserves thus ensuring that future generations may know the majesty of the earth as we know it today John F. Kennedy American politician who served as the 35th president of the United States unknown "
	},
	{
		title: "Let us accept our own responsibility for the future",
		date: "18 Feb 1958",
    url: "quotes/let-us-accept-our-own-responsibility-for-the-future.html",
		content: "Let us not despair but act Let us not seek the Republican answer or the Democratic answer but the right answer Let us not seek to fix the blame for the past let us accept our own responsibility for the future John F. Kennedy American politician who served as the 35th president of the United States Loyola College Alumni Banquet "
	},
	{
		title: "The Discomfort of Thought",
		date: "1962",
    url: "quotes/the-discomfort-of-thought.html",
		content: "As every past generation has had to disenthrall itself from an inheritance of truisms and stereotypes so in our own time we must move on from the reassuring repetition of stale phrases to a new difficult but essential confrontation with reality For the great enemy of truth is very often not the lie deliberate contrived and dishonest but the myth persistent persuasive and unrealistic Too often we hold fast to the clichés of our forebears We subject all facts to a prefabricated set of interpretations We enjoy the comfort of opinion without the discomfort of thought John F. Kennedy American politician who served as the 35th president of the United States Commencement Address at Yale University "
	},
	{
		title: "Defending the pursuit of learning",
		date: "May 18, 1963",
    url: "quotes/defending-the-pursuit-of-learning.html",
		content: "If the pursuit of learning is not defended by the educated citizen it will not be defended at all For there will always be those who scoff at intellectuals who cry out against research who seek to limit our educational system Modern cynics and skeptics see no more reason for landing a man on the moon which we shall do than the cynics and skeptics of half a millennium ago saw for the discovery of this country They see no harm in paying those to whom they entrust the minds of their children a smaller wage than is paid to those to whom they entrust the care of their plumbing But the educated citizen knows how much more there is to know He knows that knowledge is power more so today than ever before He knows that only an educated and informed people will be a free people that the ignorance of one voter in a democracy impairs the security of all and that if we can as Jefferson put it enlighten the people generally tyranny and the oppressions of mind and body will vanish like evil spirits at the dawn of day And therefore the educated citizen has a special obligation to encourage the pursuit of learning to promote exploration of the unknown to preserve the freedom of inquiry to support the advancement of research and to assist at every level of government the improvement of education for all Americans from grade school to graduate school John F. Kennedy American politician who served as the 35th president of the United States 90th Anniversary Convocation of Vanderbilt University "
	},
	{
		title: "Our privileges can be no greater than our obligations",
		date: "May 18, 1963",
    url: "quotes/our-privileges-can-be-no-greater-than-our-obligations.html",
		content: "But this Nation was not founded solely on the principle of citizens rights Equally important though too often not discussed is the citizen s responsibility For our privileges can be no greater than our obligations The protection of our rights can endure no longer than the performance of our responsibilities Each can be neglected only at the peril of the other I speak to you today therefore not of your rights as Americans but of your responsibilities They are many in number and different in nature They do not rest with equal weight upon the shoulders of all Equality of opportunity does not mean equality of responsibility All Americans must be responsible citizens but some must be more responsible than others by virtue of their public or their private position their role in the family or community their prospects for the future or their legacy from the past Increased responsibility goes with increased ability for of those to whom much is given much is required John F. Kennedy American politician who served as the 35th president of the United States 90th Anniversary Convocation of Vanderbilt University "
	},
	{
		title: "A working simple system",
		date: "1975",
    url: "quotes/a-working-simple-system.html",
		content: "A complex system that works is invariably found to have evolved from a simple system that worked The inverse proposition also appears to be true A complex system designed from scratch never works and cannot be made to work You have to start over beginning with a working simple system John Gall  Systemantics "
	},
	{
		title: "tikkun olam",
		date: "12 Dec 2018",
    url: "quotes/tikkun-olam.html",
		content: "In Jewish teachings tikkun olam refers to any activity that improves the world bringing it closer to the harmonious state for which it was created All people regardless of religious affiliation are encouraged to contribute to the common good As a company founded by Jews this healing tikkun of the world olam is at the core of the mission of The Gottman Institute Although we are not a religious organization for more than 20 years tikkun olam has propelled us forward with a passion for helping people It s more than just our why It s a shared sense of responsibility If we believe we have information that is helpful to others which we do then it is our obligation to use this knowledge for good I didn t always feel this way As a scientist at the University of Washington I was making a good living watching couples deteriorate in my research lab It was my wife Dr Julie Schwartz Gottman a brilliant clinical psychologist who encouraged me to use my research to help people It was from a great love that the Gottman Method was born According to Rabbi Jeremy Schwartz At its most basic level tikkun olam involves arranging our personal lives as well as our politics culture and economy on the basis of love John Gottman  Tikkun Olam and the Mission of the Gottman Institute "
	},
	{
		title: "Climate Changers",
		date: "2006",
    url: "quotes/climate-changers.html",
		content: "We urgently need to stabilise and reduce human numbers There is no way that a population of nine billion the UN s medium forecast for 2050 can meet its energy needs without unacceptable damage to the planet and a great deal of human misery We need to think about climate changers human beings and their numbers as well as climate change It is the elephant in the room that nobody wants to talk about Unless we reduce the human population humanely through family planning nature will do it for us through violence epidemics or starvation John Guillebaud Emeritus Professor of Family Planning and Reproductive Health at University College London The Independent "
	},
	{
		title: "Conventional Views",
		date: "",
    url: "quotes/conventional-views.html",
		content: "The conventional view serves to protect us from the painful job of thinking John Kenneth Galbraith  unknown "
	},
	{
		title: "If you'll just rattle your jewelry",
		date: "4 Nov 1963",
    url: "quotes/if-youll-just-rattle-your-jewelry.html",
		content: "For our last number I d like to ask your help Would the people in the cheaper seats clap your hands And the rest of you if you ll just rattle your jewelry John Lennon English singer, songwriter, musician and peace activist Royal Variety Performance in London "
	},
	{
		title: "More Popular than Jesus",
		date: "1966",
    url: "quotes/more-popular-than-jesus.html",
		content: "Christianity will go It will vanish and shrink I needn t argue about that I m right and I ll be proved right We re more popular than Jesus now I don t know which will go first rock n roll or Christianity Jesus was all right but his disciples were thick and ordinary It s them twisting it that ruins it for me John Lennon English singer, songwriter, musician and peace activist London Evening Standard "
	},
	{
		title: "Equals",
		date: "2000",
    url: "quotes/equals.html",
		content: "Was it better to have a guy who was better than the people I had in To make the group stronger or to let me be stronger Instead of going for an individual thing we went for the strongest format equals John Lennon English singer, songwriter, musician and peace activist The Beatles Anthology "
	},
	{
		title: "Technological Unemployment",
		date: "1930",
    url: "quotes/technological-unemployment.html",
		content: "We are being afflicted with a new disease of which some readers may not yet have heard the name but of which they will hear a great deal in the years to come namely technological unemployment This means unemployment due to our discovery of means of economising the use of labour outrunning the pace at which we can find new uses for labour John Maynard Keynes  Economic Possibilities for our Grandchildren "
	},
	{
		title: "To live wisely and agreeably and well",
		date: "1930",
    url: "quotes/to-live-wisely-and-agreeably-and-well.html",
		content: "Thus for the first time since his creation man will be faced with his real his permanent problem how to use his freedom from pressing economic cares how to occupy the leisure which science and compound interest will have won for him to live wisely and agreeably and well John Maynard Keynes  Economic Possibilities for our Grandchildren "
	},
	{
		title: "Civilization was a thin and precarious crust",
		date: "1938",
    url: "quotes/civilization-was-a-thin-and-precarious-crust.html",
		content: "We were not aware that civilization was a thin and precarious crust erected by the personality and the will of a very few and only maintained by rules and conventions skilfully put across and guilefully preserved John Maynard Keynes  My Early Beliefs "
	},
	{
		title: "It is foolish to view realism and idealism as incompatible",
		date: "May 8, 2017",
    url: "quotes/it-is-foolish-to-view-realism-and-idealism-as-incompatible.html",
		content: "I consider myself a realist I have certainly seen my share of the world as it really is and not how I wish it would be What I ve learned is that it is foolish to view realism and idealism as incompatible or to consider our power and wealth as encumbered by the demands of justice morality and conscience John McCain  New York Times "
	},
	{
		title: "Unbelievable Heroes",
		date: "2009",
    url: "quotes/unbelievable-heroes.html",
		content: "There are two novels that can change a bookish fourteen year old s life The <cite>Lord of the Rings< cite> and <cite>Atlas Shrugged< cite> One is a childish fantasy that often engenders a lifelong obsession with its unbelievable heroes leading to an emotionally stunted socially crippled adulthood unable to deal with the real world The other of course involves orcs John Rogers  Kung Fu Monkey "
	},
	{
		title: "Intellectual Debate",
		date: "",
    url: "quotes/intellectual-debate.html",
		content: "In all intellectual debates both sides tend to be correct in what they affirm and wrong in what they deny John Stuart Mill English philosopher, political economist, Member of Parliament (MP) and civil servant unknown "
	},
	{
		title: "The increase of wealth is not boundless",
		date: "1848",
    url: "quotes/the-increase-of-wealth-is-not-boundless.html",
		content: "The increase of wealth is not boundless A stationary condition of capital and population implies no stationary state of human improvement There would be as much scope as ever for all kinds of mental culture and moral and social progress as much room for improving the art of living and much more likelihood of it being improved when minds ceased to be engrossed by the art of getting on John Stuart Mill English philosopher, political economist, Member of Parliament (MP) and civil servant  "
	},
	{
		title: "An assembly that meshes over a specific problem",
		date: "2024-05-24",
    url: "quotes/an-assembly-that-meshes-over-a-specific-problem.html",
		content: "To manifest possibility in the zone of dialogical imagination David Graeber learned there was no need to persuade everybody to agree on every issue You don t even want to achieve ideological uniformity he averred An assembly that meshes over a definition of a specific problem and a commitment to a specific course of action forms a community of purpose without a community of definition The rules of discourse can support a revisable consensus Do not blow up minor moral differences into mortal threats Do extend the benefit of the doubt Do not reduce perspectives to a juxtaposition of opposite extremes Do look for zones of affinity If such rules do not yield a creative synthesis that everybody can accept then the rules can change Deliberative assemblies when properly facilitated encompass a plurality of perspectives from a perspective that refuses to impose itself as a worldview The crux is that everybody gets a say John Summers  David Graeber’s Magic Words "
	},
	{
		title: "Prime training for permanent underclasses",
		date: "2005",
    url: "quotes/prime-training-for-permanent-underclasses.html",
		content: "Look again at what I consider to be the seven lessons of school teaching confusion class position indifference emotional and intellectual dependency conditional self esteem and surveillance All of these lessons are prime training for permanent underclasses people deprived forever of finding the center of their own special genius John Taylor Gatto  Dumbing Us Down: The Hidden Curriculum of Compulsory Schooling, 10th Anniversary Edition "
	},
	{
		title: "Dreams Come True",
		date: "1989",
    url: "quotes/dreams-come-true.html",
		content: "Dreams come true Without that possibility nature would not incite us to have them John Updike  Self-Consciousness: Memoirs "
	},
	{
		title: "Postel’s Law",
		date: "1981",
    url: "quotes/postels-law.html",
		content: "Be conservative in what you do be liberal in what you accept from others Jon Postel  Transmission Control Protocol Request For Comments RFC 793 "
	},
	{
		title: "The Credibility of a Comedian",
		date: "June 19, 2011",
    url: "quotes/the-credibility-of-a-comedian.html",
		content: "The embarrassment is that I m given credibility in this world because of the disappointment that the public has in what the news media does Jon Stewart  Fox News Sunday with Chris Wallace "
	},
	{
		title: "To prolong our presence on the face of the Earth",
		date: "1990",
    url: "quotes/to-prolong-our-presence-on-the-face-of-the-earth.html",
		content: "What we re doing now is trying to think like nature in the sense that we are aware that species that have gone before us have disappeared from the face of the Earth We d like to use our intelligence and our creative capacity to prolong our presence on the face of the Earth as long as possible It requires therefore that we develop the kinds of tactics and strategies amongst ourselves so as to assure that this can occur to assure that we will not destroy ourselves or the planet to make it uninhabitable and to allow the fullness of the potential of the individual to be expressed to flower Jonas Salk  with Bill Moyers "
	},
	{
		title: "Careful, thoughtful, small, practical efforts",
		date: "2002",
    url: "quotes/careful-thoughtful-small-practical-efforts.html",
		content: "The vast majority of difficult important human problems both inside and outside organizations are not solved by a swift decisive stroke from someone at the top What usually matters are careful thoughtful small practical efforts by people working far from the limelight Joseph L. Badaracco, Jr.  Leading Quietly: An Unorthodox Guide to Doing the Right Thing "
	},
	{
		title: "Discovering that I am Nobody",
		date: "",
    url: "quotes/discovering-that-i-am-nobody.html",
		content: "We are all aware if we have ever tried it how empty and ghostly is a life lived for a long while in absolute solitude Free me from my fellows let me alone to work out the salvation of my own glorious self and surely so I may fancy I shall now for the first time show who I am No not so on the contrary I merely show in such a case who I am not I am no longer friend brother companion co worker servant citizen father son I exist for nobody and ere long perhaps to my surprise generally to my horror I discover that I <em>am< em> nobody Josiah Royce  Lecture on Hegel "
	},
	{
		title: "The producing of good citizens",
		date: "1526",
    url: "quotes/the-producing-of-good-citizens.html",
		content: "For they have no conception of the duty of government who wish to limit it to the settling of disputes over money or the punishment of criminals On the contrary it is much more important for the magistrates to devote their energy to the producing of good citizens than to the punishment and restraint of evildoers How much less need would there be to punish if these matters were rightly looked after beforehand Juan Louis Vives Spanish (Valencian) scholar and Renaissance humanist who spent most of his adult life in the Southern Netherlands Concerning the Relief of the Poor "
	},
	{
		title: "the biological evolution of Homo sapiens was usurped by socio-cultural evolution",
		date: "2008-07-09",
    url: "quotes/the-biological-evolution-of-homo-sapiens-was-usurped-by-socio-cultural-evolution.html",
		content: "Many biologists and social scientists have noted that with the development of human culture the biological evolution of Homo sapiens was usurped by socio cultural evolution The construction of artificial environments and social structures created new criteria for selection and biological fitness was replaced by cultural fitness which is often different for different cultures and is generally not measured by the number of offspring Moreover the mechanism of socio cultural evolution is different from the model of biological evolution that was proposed by Charles Darwin 1809 1882 and refined by many others In essence socio cultural evolution is Lamarckian in nature it is an example of acquired inheritance as described by the French naturalist Jean Baptiste Lamarck 1744 1829 because humans are able to pass on cultural achievements to the next generation Jürgen Klüver   "
	},
	{
		title: "Economics is essentially a question of design",
		date: "2017",
    url: "quotes/economics-is-essentially-a-question-of-design.html",
		content: "Economics it turns out is not a matter of discovering laws it is essentially a question of design Kate Raworth English economist Doughnut Economics: 7 Ways to Think Like a 21st Century Economist "
	},
	{
		title: "Economies that make us thrive",
		date: "2017",
    url: "quotes/economies-that-make-us-thrive.html",
		content: "Today we have economies that need to grow whether or not they make us thrive what we need are economies that make us thrive whether or not they grow Kate Raworth English economist Doughnut Economics: 7 Ways to Think Like a 21st Century Economist "
	},
	{
		title: "Managing our planetary household",
		date: "2017",
    url: "quotes/managing-our-planetary-household.html",
		content: "The word economics was coined by the philosopher Xenophon in Ancient Greece Combining oikos meaning household with nomos meaning rules or norms he invented the art of household management and it could not be more relevant today This century we need some pretty insightful managers to guide our planetary household and ones who are ready to pay attention to the needs of all of its inhabitants Kate Raworth English economist Doughnut Economics: 7 Ways to Think Like a 21st Century Economist "
	},
	{
		title: "Economies that enable us to thrive",
		date: "2024-05-13",
    url: "quotes/economies-that-enable-us-to-thrive.html",
		content: "Instead of pursuing endless growth it is time to pursue wellbeing for all people as part of a thriving world with policymaking that is designed in the service of this goal This results in a very different conception of progress in the place of endless growth we seek a dynamic balance one that aims to meet the essential needs of every person while protecting the life supporting systems of our planetary home And since we are the inheritors of economies that need to grow whether or not they make us thrive a critical challenge in high income countries is to create economies that enable us to thrive whether or not they grow Kate Raworth English economist What does progress look like on a planet at its limit? "
	},
	{
		title: "Diversity Helps Your Business -- But Not The Way You Think",
		date: "02 Jun 2009",
    url: "quotes/diversity-helps-your-business-but-not-the-way-you-think.html",
		content: "I recently published research that found that members of a social majority are more likely to voice unique perspectives and critically review task relevant information when there is more social diversity present than when there is not Moreover this is true even when the people who are different don t express any unique perspectives themselves Our research suggests that the mere presence of social diversity makes people with independent points of view more willing to voice those points of view and others more willing to listen In one of our studies we compared homogeneous and diverse groups trying to solve a murder mystery The diverse groups reported that they didn t work together very effectively and they were less confident about their decisions than the homogeneous groups yet they consistently outperformed those homogeneous groups Katherine Phillips American business theorist Forbes "
	},
	{
		title: "You create a world of your own",
		date: "2001",
    url: "quotes/you-create-a-world-of-your-own.html",
		content: "In 1983 when he Ken Thompson and Dennis Richie won the Turing award which has been called the Nobel prize of computer science Thompson explained I am a programmer On my 1040 form that is what I put down as my occupation He has called programming an addiction of sorts and it was in the Berkeley computer center that he got hooked Sitting in the Bell Labs offices years later he described the appeal as having all the craftsman s satisfactions of making things without the cost and trouble of procuring the materials It s like building something where you don t have to order the cement Thompson said You create a world of your own your own environment and you never leave this room Ken Thompson American pioneer of computer science Go To: The Story of the Math Majors, Bridge Players, Engineers, Chess Wizards, Maverick Scientists, and Iconoclasts-- the Programmers Who Created the Software Revolution "
	},
	{
		title: "The Beautiful, the Good and the True",
		date: "1996",
    url: "quotes/the-beautiful-the-good-and-the-true.html",
		content: "If you are talking to me about your new car you are the first person I am the second person and the car is the third person These pronouns actually represent three perspectives that human beings can take when they talk about the world or attempt to know the world The fascinating part is that these three perspectives might actually give rise to art morals and science Or the Beautiful the Good and the True the Beauty that is in the eye or the I of the beholder the Good or moral actions that can exist between you and me as a we and the objective Truth about third person objects or its that you and I might discover hence art I morals we and science it Ken Wilber American philosopher and author A Brief History of Everything "
	},
	{
		title: "The Left Hand Dimension",
		date: "1996",
    url: "quotes/the-left-hand-dimension.html",
		content: "But the main point is that this Left Hand dimension refers to the inside to the <em>interior depth< em> that is <em>consciousness< em> itself Q You said earlier that depth is consciousness or what depth looked like from within KW Yes exactly The Left Hand is what the holon looks like from within the Right Hand is what the same holon looks like from without Interior and exterior Consciousness and form Subjective and objective Ken Wilber American philosopher and author A Brief History of Everything "
	},
	{
		title: "Art and Spirit",
		date: "1997",
    url: "quotes/art-and-spirit.html",
		content: "And whatever we mean by the word spirit let us just say with Tillich that it involves for each of us our ultimate concern it is in that simple awestruck moment when great art enters you and changes you that spirit shines in this world just a little more brightly than it did the moment before Ken Wilber American philosopher and author The Eye of Spirit: An Integral Vision for a World Gone Slightly Mad "
	},
	{
		title: "Everybody Has Some Important Pieces of the Truth",
		date: "2000",
    url: "quotes/everybody-has-some-important-pieces-of-the-truth.html",
		content: "My work is an attempt to make room in the Kosmos for all of the dimensions levels domains waves memes modes individuals cultures and so on ad infinitum I have one major rule Everybody is right More specifically everybody including me has some important pieces of truth and all of those pieces need to be honored cherished and included in a more gracious spacious and compassionate embrace Ken Wilber American philosopher and author Collected Works of Ken Wilber, Volume 8 "
	},
	{
		title: "Homophobia",
		date: "2000",
    url: "quotes/homophobia.html",
		content: "An integral approach acknowledges that all views have a degree of truth but some views are more true than others more evolved more developed more adequate And so let s get that part out of the way right now homophobia in any form as far as I can tell stems from a lower level of human development but it is a level it exists and one has to make room in one s awareness for those lower levels as well just as one has to include third grade in any school curriculum Just don t you know put those people in charge of anything important Ken Wilber American philosopher and author Collected Works of Ken Wilber, Volume 8 "
	},
	{
		title: "An Integral God",
		date: "2004",
    url: "quotes/an-integral-god.html",
		content: "An archaic God sees divinity in any strong instinctual force A magic God locates divine power in the human ego and its magical capacity to change the animistic world with rituals and spells A mythic God is located not on this earth but in a heavenly paradise not of this world entrance to which is gained by living according to the covenants and rules given by this God to his peoples A mental God is a rational God a demythologized Ground of Being that underlies all forms of existence And an integral God is one that embraces all of the above Ken Wilber American philosopher and author Beliefnet "
	},
	{
		title: "All the World's Cultures Now Available to Us",
		date: "2007",
    url: "quotes/all-the-worlds-cultures-now-available-to-us.html",
		content: "During the last 30 years we have witnessed a historical first all of the world s cultures are now available to us for the first time the sum total of human knowledge is available to us the knowledge experience wisdom and reflection of all major human civilizations premodern modern and postmodern are open to study by anyone Ken Wilber American philosopher and author the integral vision "
	},
	{
		title: "Levels of Development",
		date: "2007",
    url: "quotes/levels-of-development.html",
		content: "To grasp what is involved with levels or stages let s use a very simple model possessing only 3 of them If we look at moral development for example we find that an infant at birth has not yet been socialized into the culture s ethics and conventions this is called the <strong>preconventional stage< strong> It is also called <strong>egocentric< strong> in that the infant s awareness is largely self absorbed But as the young child begins to learns its culture s rules and norms it grows into the <strong>conventional stage< strong> of morals This stage is also called <strong>ethnocentric< strong> in that it centers on the child s particular group tribe clan or nation and it therefore tends to exclude those not of its group But at the next major stage of moral development the <strong>postconventional stage< strong> the individual s identity expands once again this time to include a care and concern for all peoples regardless of race color sex or creed which is why this stage is also called <strong>worldcentric< strong> Thus moral development tends to move from me egocentric to us ethnocentric to all of us worldcentric a good example of the unfolding waves of consciousness Ken Wilber American philosopher and author the integral vision "
	},
	{
		title: "Exponential growth in a finite world",
		date: "1973",
    url: "quotes/exponential-growth-in-a-finite-world.html",
		content: "Anyone who believes that exponential growth can go on forever in a finite world is either a madman or an economist Kenneth Boulding English-born American economist, educator, peace activist, and interdisciplinary philosopher Congressional Hearings on Energy Reorganization Act of 1973 "
	},
	{
		title: "We are what we pretend to be",
		date: "1961",
    url: "quotes/we-are-what-we-pretend-to-be.html",
		content: "We are what we pretend to be so we must be careful about what we pretend to be Kurt Vonnegut American writer Mother Night "
	},
	{
		title: "Myth-Makers",
		date: "1974",
    url: "quotes/myth-makers.html",
		content: "It s only recently that I ve come to understand that writers are not marginal to our society that they in fact do all our thinking for us that we are writing myths and our myths are believed and that old myths are believed until someone writes a new one I think writers should be more responsible than they are as we ve imagined for a long time that it really doesn t matter what we say I think it s a beginning for authors to acknowledge that they are myth makers and that if they are widely read will have an influence that will last for many years I don t think that there s a strong awareness of that now and we have such a young culture that there is an opportunity to contribute wonderful new myths to it which will be accepted Kurt Vonnegut American writer WNYC Reader's Almanac "
	},
	{
		title: "We are here on Earth to fart around",
		date: "1996",
    url: "quotes/we-are-here-on-earth-to-fart-around.html",
		content: "I work at home and if I wanted to I could have a computer right by my bed and I d never have to leave it But I use a typewriter and afterward I mark up the pages with a pencil Then I call up this woman named Carol out in Woodstock and say Are you still doing typing Sure she is and her husband is trying to track bluebirds out there and not having much luck and so we chitchat back and forth and I say Okay I ll send you the pages Then I go down the steps and my wife calls Where are you going Well I say I m going to buy an envelope And she says You re not a poor man Why don t you buy a thousand envelopes They ll deliver them and you can put them in the closet And I say Hush So I go to this newsstand across the street where they sell magazines and lottery tickets and stationery I have to get in line because there are people buying candy and all that sort of thing and I talk to them The woman behind the counter has a jewel between her eyes and when it s my turn I ask her if there have been any big winners lately I get my envelope and seal it up and go to the postal convenience center down the block at the corner of Forty seventh Street and Second Avenue where I m secretly in love with the woman behind the counter I keep absolutely poker faced I never let her know how I feel about her One time I had my pocket picked in there and got to meet a cop and tell him about it Anyway I address the envelope to Carol in Woodstock I stamp the envelope and mail it in a mailbox in front of the post office and I go home And I ve had a hell of a good time I tell you we are here on Earth to fart around and don t let anybody tell you any different Kurt Vonnegut American writer Kurt Vonnegut lecture at Western Case University "
	},
	{
		title: "The Power of Stakeholder Capitalism",
		date: "2022",
    url: "quotes/the-power-of-stakeholder-capitalism.html",
		content: "Stakeholder capitalism is not about politics It is not a social or ideological agenda It is not woke It is capitalism driven by mutually beneficial relationships between you and the employees customers suppliers and communities your company relies on to prosper This is the power of capitalism Larry Fink American billionaire businessman, chairman and CEO of BlackRock Letter to CEOs from Larry Fink in 2022 "
	},
	{
		title: "We need governments to provide clear pathways",
		date: "2022",
    url: "quotes/we-need-governments-to-provide-clear-pathways.html",
		content: "Capitalism has the power to shape society and act as a powerful catalyst for change But businesses can t do this alone and they cannot be the climate police That will not be a good outcome for society We need governments to provide clear pathways and a consistent taxonomy for sustainability policy regulation and disclosure across markets When we harness the power of both the public and private sectors we can achieve truly incredible things This is what we must do to get to net zero Larry Fink American billionaire businessman, chairman and CEO of BlackRock Letter to CEOs from Larry Fink in 2022 "
	},
	{
		title: "Workers demanding more from their employers",
		date: "2022",
    url: "quotes/workers-demanding-more-from-their-employers.html",
		content: "Workers demanding more from their employers is an essential feature of effective capitalism It drives prosperity and creates a more competitive landscape for talent pushing companies to create better more innovative environments for their employees actions that will help them achieve greater profits for their shareholders Companies that deliver are reaping the rewards Larry Fink American billionaire businessman, chairman and CEO of BlackRock Letter to CEOs from Larry Fink in 2022 "
	},
	{
		title: "Your company’s purpose is its north star",
		date: "2022",
    url: "quotes/your-companys-purpose-is-its-north-star.html",
		content: "It s never been more essential for CEOs to have a consistent voice a clear purpose a coherent strategy and a long term view Your company s purpose is its north star in this tumultuous environment Putting your company s purpose at the foundation of your relationships with your stakeholders is critical to long term success Larry Fink American billionaire businessman, chairman and CEO of BlackRock Letter to CEOs from Larry Fink in 2022 "
	},
	{
		title: "Her faith had twisted very early in her childhood",
		date: "2021",
    url: "quotes/her-faith-had-twisted-very-early-in-her-childhood.html",
		content: "And it was true the religion she was raised in had always seemed vaguely foolish to her if rich with mystery and ceremony for why should babies be born into sin why should she pray to the invisible forces why would god be a trinity why should she who felt her greatness hot in her blood be considered lesser because the first woman was molded from a rib and ate a fruit and thus lost lazy Eden It was senseless Her faith had twisted very early in her childhood it would slowly grow ever more bent into its geometry until it was its own angular majestic thing Lauren Groff American novelist and short story writer Matrix "
	},
	{
		title: "Safe in the hands of a force far greater",
		date: "2021",
    url: "quotes/safe-in-the-hands-of-a-force-far-greater.html",
		content: "For it is a deep and human truth that most souls upon the earth are not at ease unless they find themselves safe in the hands of a force far greater than themselves Lauren Groff American novelist and short story writer Matrix "
	},
	{
		title: "Hands that must work",
		date: "1916",
    url: "quotes/hands-that-must-work.html",
		content: "We have hands that must work brains that must think and personalities that must be developed Lauretta Bender  Valedictorian Speech "
	},
	{
		title: "Art has to transform life itself",
		date: "1994",
    url: "quotes/art-has-to-transform-life-itself.html",
		content: "I really believe that art is capable of the total transformation of the world and of life itself and nothing less is really acceptable So I mean if art is going to have any excuse for beyond being a leisure class plaything it has to transform life itself Lawrence Ferlinghetti American poet, painter, social activist, and co-founder of City Lights Booksellers & Publishers  "
	},
	{
		title: "Americans' faith in democracy is at a record low",
		date: "2019",
    url: "quotes/americans-faith-in-democracy-is-at-a-record-low.html",
		content: "The losers in all this are everyday Americans and our faith in government From legislative showdowns to government shutdowns the level of dysfunction is rising our social and economic problems are getting worse and our democracy isn t producing any solutions Americans faith in democracy is at a record low and why shouldn t it be All we ve seen for years is gridlock or marginal tweaks in the face of economic devastation and a growing climate crisis And there s no way out in sight No wonder people are increasingly turning to the kind of outsider politicians who promise to shake up the system the system is broken and needs to be shaken up Leah Greenberg and Ezra Levin  We Are Indivisible "
	},
	{
		title: "Our political system is not equipped to deliver solutions",
		date: "2019",
    url: "quotes/our-political-system-is-not-equipped-to-deliver-solutions.html",
		content: "Now a democracy where it s nearly impossible to move legislation is bad for everyone But it s uniquely bad for progressives We actually want to change things We urgently need to change things Our societal problems climate change health care gun violence economic and racial inequity are getting worse every day Our political system is not equipped to deliver solutions in fact it s equipped to block them And every election the gap between what our politicians promise and what they re able to deliver widens and faith in our system gets a little weaker Leah Greenberg and Ezra Levin  We Are Indivisible "
	},
	{
		title: "A reactionary conservative party",
		date: "2019",
    url: "quotes/a-reactionary-conservative-party.html",
		content: "An unholy alliance between wealthy plutocrats practitioners of white identity politics and religious ideologues has produced a reactionary conservative party and they re systematically rigging the rules to keep themselves in power Leah Greenberg and Ezra Levin  We Are Indivisible "
	},
	{
		title: "A church you could bear",
		date: "2024",
    url: "quotes/a-church-you-could-bear.html",
		content: "We stayed with the blues and Francie sensing a vein of covenant sang in her scratchiest aching voice the reason we cajoled her into the band to start with and it began to resemble what I once imagined church might be like a church you could bear where people laughed and enjoyed each other and did not care if they were right all the time or if other people were wrong Leif Enger American author I Cheerfully Refuse "
	},
	{
		title: "To refuse Apocalypse in all its forms",
		date: "2024",
    url: "quotes/to-refuse-apocalypse-in-all-its-forms.html",
		content: "She said the church was a broken compass That our job always and forever was to refuse Apocalypse in all its forms and work cheerfully against it Leif Enger American author I Cheerfully Refuse "
	},
	{
		title: "Our Reply to Violence",
		date: "",
    url: "quotes/our-reply-to-violence.html",
		content: "This will be our reply to violence to make music more intensely more beautifully more devotedly than ever before Leonard Bernstein  unknown "
	},
	{
		title: "Deeper convictions of the heart",
		date: "19 Jan 2012",
    url: "quotes/deeper-convictions-of-the-heart.html",
		content: "Does he learn anything from writing them his songs Does he work out ideas that way I think you work out something I wouldn t call them ideas I think ideas are what you want to get rid of I don t really like songs with ideas They tend to become slogans They tend to be on the right side of things ecology or vegetarianism or antiwar All these are wonderful ideas but I like to work on a song until those slogans as wonderful as they are and as wholesome as the ideas they promote are dissolve into deeper convictions of the heart I never set out to write a didactic song It s just my experience All I ve got to put in a song is my own experience Leonard Cohen  Leonard Cohen: 'All I've got to put in a song is my own experience' "
	},
	{
		title: "Societies are not merely statistical aggregations",
		date: "1983",
    url: "quotes/societies-are-not-merely-statistical-aggregations.html",
		content: "Societies are not merely statistical aggregations of individuals engaged in voluntary exchange but something much more subtle and complicated A group or community cannot be understood if the unit of analysis is the individual taken by himself A society is clearly something greater than the sum of its parts Lester Thurow American political economist Dangerous Currents "
	},
	{
		title: "Six Impossible Things Before Breakfast",
		date: "1871",
    url: "quotes/six-impossible-things-before-breakfast.html",
		content: " I can t believe that said Alice Can t you the Queen said in a pitying tone Try again draw a long breath and shut your eyes Alice laughed There s no use trying she said one can t believe impossible things I daresay you haven t had much practice said the Queen When I was your age I always did it for half an hour a day Why sometimes I ve believed as many as six impossible things before breakfast Lewis Carroll  Through the Looking Glass "
	},
	{
		title: "Why People Sing",
		date: "1968",
    url: "quotes/why-people-sing.html",
		content: "Someone once asked me why people sing I answered they sing for many of the same reasons birds sing They sing for a mate to claim their territory or simply to give voice to the delight of being alive in the midst of a beautiful day Perhaps more than birds do humans hold a grudge They sing to complain of how grievously they have been wronged and how to avoid it in the future They sing to help themselves execute a job of work They sing so the subsequent generations won t forget what the current generation endured or dreamed or delighted in Linda Ronstadt American singer in a friend's East Village apartment, NYC "
	},
	{
		title: "When you can measure what you are speaking about",
		date: "3 May 1883",
    url: "quotes/when-you-can-measure-what-you-are-speaking-about.html",
		content: "I often say that when you can measure what you are speaking about and express it in numbers you know something about it but when you cannot express it in numbers your knowledge is of a meagre and unsatisfactory kind it may be the beginning of knowledge but you have scarcely in your thoughts advanced to the stage of science whatever the matter may be Lord Kelvin British mathematical physicist and engineer Popular Lectures "
	},
	{
		title: "Four Sentences that Lead to Wisdom",
		date: "",
    url: "quotes/four-sentences-that-lead-to-wisdom.html",
		content: "There are four sentences that lead to wisdom Do with them what you will + I am sorry + I was wrong + I don t know + I need help Louise Penny Canadian author of mystery novels set in the Canadian province of Quebec centred on the work of francophone Chief Inspector Armand Gamache of the Sûreté du Québec. The Madness of Crowds "
	},
	{
		title: "The press is so powerful in its image-making role",
		date: "13 Dec 1964",
    url: "quotes/the-press-is-so-powerful-in-its-image-making-role.html",
		content: "The press is so powerful in its image making role it can make the criminal look like he s the victim and make the victim look like he s the criminal This is the press an irresponsible press If you aren t careful the newspapers will have you hating the people who are being oppressed and loving the people who are doing the oppressing Malcolm X American Muslim minister and human rights activist Malcolm X Speech at the Audobon Ballroom in Harlem "
	},
	{
		title: "We must discover wisdom for ourselves",
		date: "1919",
    url: "quotes/we-must-discover-wisdom-for-ourselves.html",
		content: "We do not receive wisdom we must discover it for ourselves after a journey through the wilderness which no one else can make for us which no one can spare us for our wisdom is the point of view from which we come at last to regard the world Marcel Proust  Within a Budding Grove "
	},
	{
		title: "Changing the World",
		date: "",
    url: "quotes/changing-the-world.html",
		content: "Never doubt that a small group of thoughtful committed citizens can change the world Indeed it is the only thing that ever has Margaret Mead American cultural anthropologist unknown "
	},
	{
		title: "Quality of Children vs. Quantity",
		date: "",
    url: "quotes/quality-of-children-vs-quantity.html",
		content: "Instead of needing lots of children we need high quality children Margaret Mead American cultural anthropologist unknown "
	},
	{
		title: "A Dark Procession",
		date: "1934",
    url: "quotes/a-dark-procession.html",
		content: "Mercer did not think at all in the accepted sense of the word Ideas occurred to him and engendered other ideas But the process which linked any two of them was a dark procession taking place in some subconscious part of the brain Margery Allingham English mystery novelist Dancers in Mourning "
	},
	{
		title: "Occasions When the Intellect Retires Gracefully",
		date: "1934",
    url: "quotes/occasions-when-the-intellect-retires-gracefully.html",
		content: "There are occasions when the intellect retires gracefully from a situation entirely behind its decorous control and leaves all the other complicated machinery of the mind to muddle through on its own Margery Allingham English mystery novelist Dancers In Mourning "
	},
	{
		title: "The Only Sign of Mental Activity",
		date: "1934",
    url: "quotes/the-only-sign-of-mental-activity.html",
		content: "The other pictures varied between the sentimentally lewd and the illustrated Scotch joke variety wherein Glengarried dogs take the place of figures There were no books and a small writing table with drawers was the only sign of mental activity Margery Allingham English mystery novelist Dancers In Mourning "
	},
	{
		title: "Muddled thinking and self-deception",
		date: "1938",
    url: "quotes/muddled-thinking-and-self-deception.html",
		content: "Mr Campion was shocked There are some people to whom muddled thinking and self deception are the two most unforgivable crimes in the world Margery Allingham English mystery novelist The Fashion in Shrouds "
	},
	{
		title: "Merely Thoroughly Outrageous",
		date: "1952",
    url: "quotes/merely-thoroughly-outrageous.html",
		content: "He made the discovery with a certain amount of relief since it took him at least out of the region of pure fantasy and into the merely thoroughly outrageous with which as a modern he was by now more or less familiar Margery Allingham English mystery novelist The Tiger in the Smoke "
	},
	{
		title: "Be more curious about ideas",
		date: "1937",
    url: "quotes/be-more-curious-about-ideas.html",
		content: "Be less curious about people and more curious about ideas Marie Curie Polish and naturalised-French physicist and chemist who conducted pioneering research on radioactivity  "
	},
	{
		title: "Do the Right Thing",
		date: "",
    url: "quotes/do-the-right-thing.html",
		content: "Do the right thing It will gratify some people and astonish the rest Mark Twain  unknown "
	},
	{
		title: "Pursue not happiness, but discernment",
		date: "1990",
    url: "quotes/pursue-not-happiness-but-discernment.html",
		content: "It finally came to me from Jimmy Baldwin who was so good at setting me straight Happiness he told me is a very typical pursuit of the spoiled who have for the most part had things brought to their tables their attention their inspection I needed to pursue not happiness he told me but discernment You understand he said to me the ability and the art of editing a film You can transform a performance by what you clip or elide or move A stunningly bad actor or performance can be transformed by how and where you place it It has been edited and so it is not an honest or realistic presentation of what took place Well we don t understand reality too well We think that what is placed before us is real because we are either lazy or stupid we don t look around for what else is out there or within us or within each other so we say This is real But if we remove the negative friend the toxic thought the temptations that topple us then a new reality appears We get the reality we build edit post print distribute Don t accept the evil thought the prejudiced view the pessimistic view of the world Accept a role in making the world better and go out and edit it That is what Jimmy always sought to do Edit the world edit his friends edit himself Marlon Brando  Marlon Brando Interview with James Grissom "
	},
	{
		title: "To distract the watchdog of the mind",
		date: "",
    url: "quotes/to-distract-the-watchdog-of-the-mind.html",
		content: "Our conventional response to all media namely that it is how they are used that counts is the numb stance of the technological idiot For the content of a medium is like the juicy piece of meat carried by the burglar to distract the watchdog of the mind Marshall McLuhan Canadian philosopher Understanding Media: The Extensions of Man "
	},
	{
		title: "The Arc of History",
		date: "",
    url: "quotes/the-arc-of-history.html",
		content: "The arc of history is long but it bends towards justice Martin Luther King Jr. American Christian minister and activist unknown "
	},
	{
		title: "Ends for which We Live",
		date: "",
    url: "quotes/ends-for-which-we-live.html",
		content: "The means by which we live have outdistanced the ends for which we live Martin Luther King Jr. American Christian minister and activist unknown "
	},
	{
		title: "Ten thousand fools proclaim themselves",
		date: "",
    url: "quotes/ten-thousand-fools-proclaim-themselves.html",
		content: "Ten thousand fools proclaim themselves into obscurity while one wise man forgets himself into immortality Martin Luther King Jr. American Christian minister and activist unknown "
	},
	{
		title: "Intelligence plus Character",
		date: "1947",
    url: "quotes/intelligence-plus-character.html",
		content: "We must remember that intelligence is not enough Intelligence plus character that is the goal of true education Martin Luther King Jr. American Christian minister and activist The Maroon Tiger "
	},
	{
		title: "To save man from the morass of propaganda",
		date: "1947",
    url: "quotes/to-save-man-from-the-morass-of-propaganda.html",
		content: "Education must also train one for quick resolute and effective thinking To think incisively and to think for one s self is very difficult We are prone to let our mental life become invaded by legions of half truths prejudices and propaganda At this point I often wonder whether or not education is fulfilling its purpose A great majority of the so called educated people do not think logically and scientifically Even the press the classroom the platform and the pulpit in many instances do not give us objective and unbiased truths To save man from the morass of propaganda in my opinion is one of the chief aims of education Education must enable one to sift and weigh evidence to discern the true from the false the real from the unreal and the facts from the fiction Martin Luther King Jr. American Christian minister and activist The Maroon Tiger "
	},
	{
		title: "You have your position because of the events of history",
		date: "1957",
    url: "quotes/you-have-your-position-because-of-the-events-of-history.html",
		content: "No matter where you stand no matter how much popularity you have no matter how much education you have no matter how much money you have you have it because somebody in this universe helped you to get it And when you see that you can t be arrogant you can t be supercilious You discover that you have your position because of the events of history and because of individuals in the background making it possible for you to stand there Martin Luther King Jr. American Christian minister and activist Conquering Self-centeredness "
	},
	{
		title: "Unarmed Truth and Unconditional Love",
		date: "1963",
    url: "quotes/unarmed-truth-and-unconditional-love.html",
		content: "I believe that unarmed truth and unconditional love will have the final word in reality That is why right temporarily defeated is stronger than evil triumphant Martin Luther King Jr. American Christian minister and activist Civil Rights March on Washington, August 28 "
	},
	{
		title: "Intelligent guides of family planning",
		date: "1966",
    url: "quotes/intelligent-guides-of-family-planning.html",
		content: "For the Negro therefore intelligent guides of family planning are a profoundly important ingredient in his quest for security and a decent life There are mountainous obstacles still separating Negroes from a normal existence Yet one element in stabilizing his life would be an understanding of and easy access to the means to develop a family related in size to his community environment and to the income potential he can command This is not to suggest that the Negro will solve all his problems through Planned Parenthood His problems are far more complex encompassing economic security education freedom from discrimination decent housing and access to culture Yet if family planning is sensible it can facilitate or at least not be an obstacle to the solution of the many profound problems that plague him Martin Luther King Jr. American Christian minister and activist Family Planning - A Special and Urgent Concern "
	},
	{
		title: "An ordinary person, doing an ordinary job",
		date: "1967",
    url: "quotes/an-ordinary-person-doing-an-ordinary-job.html",
		content: "I don t want you to forget it No matter where you are today somebody helped you to get there Yes It may have been an ordinary person doing an ordinary job in an extraordinary way Some few are able to get some education you didn t get it by yourself Don t forget those who helped you come over Martin Luther King Jr. American Christian minister and activist Why Jesus Called a Man A Fool "
	},
	{
		title: "Peaceful ends through peaceful means",
		date: "April 1967",
    url: "quotes/peaceful-ends-through-peaceful-means.html",
		content: "One day we must come to see that peace is not merely a distant goal we seek but that it is a means by which we arrive at that goal We must pursue peaceful ends through peaceful means Martin Luther King Jr. American Christian minister and activist Riverside Church Speech "
	},
	{
		title: "Creatively Maladjusted",
		date: "Aug 31, 1967",
    url: "quotes/creatively-maladjusted.html",
		content: "There is a need now more than ever before for men and women in our nation to be creatively maladjusted And I say to you that I choose to be among the maladjusted Martin Luther King Jr. American Christian minister and activist The Three Evils "
	},
	{
		title: "An edifice which produces beggars needs restructuring",
		date: "Aug 31, 1967",
    url: "quotes/an-edifice-which-produces-beggars-needs-restructuring.html",
		content: "True compassion is more than flinging a coin to a beggar It understands that an edifice which produces beggars needs restructuring Martin Luther King Jr. American Christian minister and activist The Three Evils "
	},
	{
		title: "Guided missiles and misguided men",
		date: "Aug 31, 1967",
    url: "quotes/guided-missiles-and-misguided-men.html",
		content: "When scientific power outruns moral power we end up with guided missiles and misguided men When we foolishly maximize the minimum and minimize the maximum we sign the warrant for our own day of doom It is this moral lag in our thing oriented society that blinds us to the human reality around us and encourages us in the greed and the exploitation which creates the sector of poverty in the midst of wealth Martin Luther King Jr. American Christian minister and activist The Three Evils "
	},
	{
		title: "When machines are considered more important than people",
		date: "Aug 31, 1967",
    url: "quotes/when-machines-are-considered-more-important-than-people.html",
		content: "When machines and computers profit motives and property rights are considered more important than people the giant triplets of racism economic exploitation and militarism are incapable of being conquered A civilization can flounder as readily in the face of moral bankruptcy as it can through financial bankruptcy Martin Luther King Jr. American Christian minister and activist The Three Evils "
	},
	{
		title: "Single Garment of Destiny",
		date: "1968",
    url: "quotes/single-garment-of-destiny.html",
		content: "We are tied together in the single garment of destiny caught in an inescapable network of mutuality And whatever affects one directly affects all indirectly Martin Luther King Jr. American Christian minister and activist Remaining Awake Through A Great Revolution "
	},
	{
		title: "First they came...",
		date: "",
    url: "quotes/first-they-came....html",
		content: "First they came for the communists and I didn t speak out because I wasn t a communist Then they came for the trade unionists and I didn t speak out because I wasn t a trade unionist Then they came for the Jews and I didn t speak out because I wasn t a Jew Then they came for me and there was no one left to speak out for me Martin Niemöller German theologian and Lutheran pastor unknown "
	},
	{
		title: "Cinema was about revelation",
		date: "04 Nov 2019",
    url: "quotes/cinema-was-about-revelation.html",
		content: "For me for the filmmakers I came to love and respect for my friends who started making movies around the same time that I did cinema was about revelation aesthetic emotional and spiritual revelation It was about characters the complexity of people and their contradictory and sometimes paradoxical natures the way they can hurt one another and love one another and suddenly come face to face with themselves Martin Scorsese American film director, producer, screenwriter, and actor The New York Times "
	},
	{
		title: "The intricate riddle of life",
		date: "1826",
    url: "quotes/the-intricate-riddle-of-life.html",
		content: "There is but one solution to the intricate riddle of life to improve ourselves and contribute to the happiness of others Mary Shelley English novelist The Last Man "
	},
	{
		title: "Preparing Managers to Manage",
		date: "2009",
    url: "quotes/preparing-managers-to-manage.html",
		content: "The time has come to recognize that higher education in management rests on a fatal fallacy The idea behind the contemporary business school is that preparing future business managers means training them in a discipline called Business Management After 100 years of fruitless attempts to produce such a discipline it should be clear that it does not exist Preparing managers to manage in fact is not different from preparing people to live in a civilized world Managers do not need to be trained they need to be <em>educated < em> And for that purpose although a certain amount of study of business related subjects may prove useful the business schools as they are presently constituted are at best superfluous Matthew Stewart  The Management Myth: Why the Experts Keep Getting it Wrong "
	},
	{
		title: "Relieving Ignorance",
		date: "2009",
    url: "quotes/relieving-ignorance.html",
		content: " Customer satisfaction is a good way to sell shoes but it is a bad way to relieve ignorance It is fundamentally stupid to base the content of an education on what the as yet uneducated person decides is best Matthew Stewart  The Management Myth: Why the Experts Keep Getting it Wrong "
	},
	{
		title: "A Work Ethic Gone Mad",
		date: "2009",
    url: "quotes/a-work-ethic-gone-mad.html",
		content: "The blend of corporate mysticism and transcendental consumerism he Tom Peters offers has its roots planted in the pragmatic optimistic can do American work ethic But like the Taylorist philosophy from which it springs it is also a work ethic gone mad It begins with the idea that work can be meaningful and stretches it to the point where there is no meaning outside work It becomes a deluded form of optimism a feverish activity that masks an underlying anxiety about the meaning of life a form of self alienation so complete that the self disappears entirely into its consumer preferences and transactions Matthew Stewart  The Management Myth: Why the Experts Keep Getting it Wrong "
	},
	{
		title: "We love America in a James Baldwin kind of way",
		date: "2023-08-22",
    url: "quotes/we-love-america-in-a-james-baldwin-kind-of-way.html",
		content: "And I ll miss being able to represent our country I think a lot of times that gets lost when people talk about me in particular Oh you guys don t sing the anthem blah blah blah blah blah You don t love America But we do love America It s just more in a James Baldwin kind of way not in a bald eagle on your shoulder kind of way Megan Rapinoe American professional soccer player Megan Rapinoe Answers the Critics "
	},
	{
		title: "A mind is blown",
		date: "2004",
    url: "quotes/a-mind-is-blown.html",
		content: "A mind is blown when something you always feared but knew to be impossible turns out to be true when the world turns out far vaster far more marvelous or malevolent than you ever dreamed when you get proof that everything is connected to everything else that everything you know is wrong that you are both the center of the universe and a tiny speck sailing off its nethermost edge Michael Chabon American novelist, screenwriter, columnist and short story writer Keynote at Eisner Awards "
	},
	{
		title: "Merely a Muddle",
		date: "1936",
    url: "quotes/merely-a-muddle.html",
		content: " And your remarks on the text Mr Gott declared are merely a muddle Yes Gott said Mike meekly You see Mike you haven t any <em>brain< em> really No of course not said Mike You must just keep to the cackle and write nicely You write very nicely Yes said Mike dubiously Keep off thinking things out and you ll do well In fact you ll go far Michael Innes Pseudonym for John Innes Mackintosh Stewart, a Scottish novelist and academic The Seven Suspects "
	},
	{
		title: "Engineer and designer need to party together",
		date: "2007",
    url: "quotes/engineer-and-designer-need-to-party-together.html",
		content: "Prior to Steve Jobs return to Apple there was a decent centralized usability team equipped with those fancy rooms with one way mirrors and video cameras I m certain these folks did significant work but when Jobs returned he shut it down and he cast the design teams to the wind Each product team inherited part of the former usability team Now I arrived after this reorganization occurred so I don t know the actual reasoning but I do know I never saw those usability labs used once and I would argue that in the past decade Apple has created some of the most usable products out there My opinion is that the choice to spread the usability design function across the engineering team was intended to send a clear message engineer and designer need to party more together I can t imagine building a team responsible for consumer products where engineers and designers weren t constantly meddling in each other s business Yes they often argue from completely opposite sides of the brain Yes it is often a battle of art and science but engineering and design want exactly the same thing They want the intense satisfaction of knowing they successfully built something that matters Michael Lopp a blogger, software engineering manager, and webcomic author Managing Humans: Biting and Humorous Tales of a Software Engineering Manager "
	},
	{
		title: "Cultural complexity began to expand exponentially",
		date: "2024",
    url: "quotes/cultural-complexity-began-to-expand-exponentially.html",
		content: "Once all three tribal instincts the peer instinct the hero instinct and the ancestor instinct were in place in the last hundred thousand years our forebears began to thrive and to live in recognizably human ways Within an evolutionary eyeblink they suddenly had much more sophisticated tools weapons arts and rituals After millions of years of achingly slow change cultural complexity began to expand exponentially The pools of shared knowledge in human communities began to accumulate across generations and adapt to local ecologies This tribe level learning not heightened individual brainpower is the secret to how our kind adapted to widely differing climates and terrains Humans became the earth s dominant species threatened only by our own success Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Culture and psyche are inexorably intertwined",
		date: "2024",
    url: "quotes/culture-and-psyche-are-inexorably-intertwined.html",
		content: " by the late twentieth century it became hard to miss that cultural patterns of societies and of individuals were in flux Across the world societies were evolving as globalized generations developed new lifestyles through selective retention of their parents ways and heightened borrowing from other traditions Individuals were migrating more than ever but not always assimilating instead maintaining multiple cultural worldviews that they switched between situationally Scholars began to appreciate that it was not simply collective institutions or individual psychologies that determined culture but the interplay between them Cultural institutions shape the individual s mind and the individual s mind shapes cultural institutions Culture and psyche are inexorably intertwined Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Humans are the tribal animal",
		date: "2024",
    url: "quotes/humans-are-the-tribal-animal.html",
		content: "Humans cooperate based on kinship and friendship but we also have more powerful forms of social glue that other species lack From the early Stone Age we started evolving specialized brain systems that facilitated sharing knowledge in groups If someone in your foraging band figured out how to dislodge coconuts from a tree you would learn by watching and soon the whole group would share the skill Then you could work in closer coordination with each other by following this shared script In this way groups living in different ecologies developed different pools of common knowledge different cultures Members of each group gained increased mutual understanding even if the topic wasn t coconuts the common ground of shared coconut expertise could help in learning other survival relevant skills Group membership became increasingly manifest in behavior making peers more similar predictable and sympathetic Our forebears began to experience the elevating sense of Us an expansion of identity beyond close kinship and direct friendship to a broader group In these larger clans they began to highlight their membership through distinctive styles of dress and self adornment At the same time human brains kept evolving to share new kinds of knowledge such as reputation in these broader groups all of which further boosted our fitness as social animals In time interactions using new forms of knowledge such as ritual coalesced across clans to forge broad networks of sharing in mates resources and knowledge Humans began feeling solidarity with these large communities thousands of other people living in small groups nested within larger groups held together by the glue of common cultural knowledge This form of social organization is not a hive or a troop but a tribe Surviving through sharing knowledge in these solidaristic nested groups is tribal living With apologies to Aristotle it s misleading to call humans the social animal We are more accurately the tribal animal Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Our tribal instincts are not bugs",
		date: "2024",
    url: "quotes/our-tribal-instincts-are-not-bugs.html",
		content: "Especially in a time of powerful and shifting politics we shouldn t ignore our quintessential human capacities to bond with our communities Nor should we delude ourselves that the thin gruel of rationality and universalism will mobilize people to accomplish desired goals I write as a convert to the advocacy of tribalism I used to consider group related instincts as a detrimental force in human affairs I was raised as you may have been too to see rationality creativity and morality as the hallmarks of humanity and I viewed conformity status seeking and traditionalism as fallibilities But based on what I ve learned from decades as a behavioral scientist I ve come to see my former humanities worldview as naive or at least incomplete Our tribal instincts are not bugs in the system that hinder an otherwise intelligent species They are the distinguishing features of our kind that enabled its evolutionary ascent and still drive many of its greatest achievements today They are not human foibles that hold us back they are human superpowers that create our distinctive cultures Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Rationality is not the strong suit of our species",
		date: "2024",
    url: "quotes/rationality-is-not-the-strong-suit-of-our-species.html",
		content: "My recommendations are not the typical tips from an academic about how to encourage more rational decisions I think that rationality is not the strong suit of our species We are Homo tributus not Homo economicus Certainly tribal instincts are part of the problem in many pressing conflicts but they also can be and I think have to be part of the solution Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Three Layers of Tribal Instincts",
		date: "2024",
    url: "quotes/three-layers-of-tribal-instincts.html",
		content: "In this book I peel the onion of our special human talent for sharing with groups to distinguish three layers of tribal instincts They originated in the Stone Age but we can still recognize these evolved systems in our minds and hearts today Our sideways glances at classmates coworkers and neighbors are part of the peer instinct as is our impulse to mesh with their patterns in our everyday inferences and actions Our upward directed fascination with celebrities CEOs MVPs and other elites comes from the hero instinct as do our aspirations for glory and our drive to contribute Our backward gazing nostalgia is part of the ancestor instinct as is the comfort we find in traditions and the duty we feel to maintain them These instincts are like three characters inside every person the conformist who seeks belonging and understanding the contributor who dreams of esteem and tribute and the traditionalist who cherishes continuity Each of these systems has its fallibilities but as we ll see each generally guides people in adaptive directions Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "The Three Tribal Instincts",
		date: "2024",
    url: "quotes/the-three-tribal-instincts.html",
		content: "For a better understanding of the partisan conflict straining US democracy and the role of our evolved group psychology within it we can do better by focusing on the three tribal instincts that we have come to know in this book These are psychological systems for meshing with peers helping the clan and maintaining the tribe These drives have helped human groups survive from the Stone Age to today because they guide constructive collaboration Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Tribal living is what made us truly human",
		date: "2024",
    url: "quotes/tribal-living-is-what-made-us-truly-human.html",
		content: "In Tribal I hope to reclaim the original meaning of the word as community enabled by shared culture This is how humankind first transcended the narrow bonds of kith and kin to accomplish bigger things in clans And it s how we later ventured into exchange and collaboration with strangers in the broader networks called tribes In these nested groups our forebears first felt the empowering experience of access to myriad individuals and ideas the ongoing experiment that we call society It was an engine for group change and differentiation By showing that tribal living is the source of cultural change and progress I hope to put to rest any lingering association of tribes with stasis and primitivism Tribal living is what made us truly human Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "We internalize new cultural identities and codes",
		date: "2024",
    url: "quotes/we-internalize-new-cultural-identities-and-codes.html",
		content: "Contrary to essentialist views of cultural character as set in stone people s cultural conditioning and convictions change over time We internalize new cultural identities and codes with every new community we join Michael Morris works as a cultural psychologist at Columbia University in its Graduate School of Business and its Psychology Department Tribal: How the Cultural Instincts That Divide Us Can Help Bring Us Together "
	},
	{
		title: "Couldn’t everyone’s life become a work of art?",
		date: "",
    url: "quotes/couldnt-everyones-life-become-a-work-of-art.html",
		content: "What strikes me is the fact that in our society art has become something which is related only to objects and not to individuals or to life That art is something which is specialized or which is done by experts who are artists But couldn t everyone s life become a work of art Why should the lamp or the house be an art object but not our life Michel Foucault  unknown "
	},
	{
		title: "Push Outward",
		date: "",
    url: "quotes/push-outward.html",
		content: "Search for what is good and strong and beautiful in your society and elaborate from there Push outward Always create from what you already have Then you will know what to do Michel Foucault  unknown "
	},
	{
		title: "Bargaining away the experience of being alive",
		date: "1968",
    url: "quotes/bargaining-away-the-experience-of-being-alive.html",
		content: "That seems to me the great American danger we re all in that we ll bargain away the experience of being alive for the appearance of it Mike Nichols   "
	},
	{
		title: "Belief is the end of Observation",
		date: "27 Jun 2020",
    url: "quotes/belief-is-the-end-of-observation.html",
		content: "What you do is you have an idea and you hold it in your mind as long as it s useful And then when it turns out not to be useful discard it But the idea of clinging to belief as a basis for your life which is what most people do is terrifying because belief is the end of observation You believe something you stop seeing everything else Clearly that is not desirable And yet it s the way most people live Milton Glaser American graphic designer Design is Not Appearance: My Interview with Milton Glaser "
	},
	{
		title: "Design is not Appearance",
		date: "27 Jun 2020",
    url: "quotes/design-is-not-appearance.html",
		content: "Design is not appearance but a way of thinking about information and conveying ideas to others That s really what I do I am so interested in having ideas That idea that your role in the culture is to inform and delight is so sweet Not to persuade not to persuade Milton Glaser American graphic designer Design is Not Appearance: My Interview with Milton Glaser "
	},
	{
		title: "The lie of retirement",
		date: "27 Jun 2020",
    url: "quotes/the-lie-of-retirement.html",
		content: "One of the great lies of American culture is the lie of retirement that at a certain point in your life at 65 for god sakes you re ready to go to Florida and stare out the window for the next 30 years Where in the world did that idea come from Well we know where it came from The government was trying to have young people enter the workforce right So it invented this thing called retirement where people stop doing the most essential things of their lives I mean lose their purpose I have so much purpose left Milton Glaser American graphic designer Design is Not Appearance: My Interview with Milton Glaser "
	},
	{
		title: "We're part of something continuous",
		date: "2021",
    url: "quotes/were-part-of-something-continuous.html",
		content: "Edith Pretty We die We die and we decay We don t live on Basil Brown I m not sure I agree From the first human handprint on a cave wall we re part of something continuous So we don t really die Moira Buffini  The Dig "
	},
	{
		title: "If triangles had a god",
		date: "",
    url: "quotes/if-triangles-had-a-god.html",
		content: "If triangles had a god they would give him three sides Montesquieu French judge, man of letters, and political philosopher  "
	},
	{
		title: "It's sports and it's all love",
		date: "2018-03-18",
    url: "quotes/its-sports-and-its-all-love.html",
		content: "At the end of the day it s sports and it s all love I feel for both sides Commenting on having stopped to console Devin Davis a college basketball opponent who was sobbing on the court despondent at the end of the game over missing two crucial free throws Moritz Wagner   "
	},
	{
		title: "Amusing ourselves to death",
		date: "1985",
    url: "quotes/amusing-ourselves-to-death.html",
		content: "Our politics religion news athletics education and commerce have been transformed into congenial adjuncts of show business largely without protest or even much popular notice The result is that we are a people on the verge of amusing ourselves to death Neil Postman  Amusing Ourselves to Death: Public Discourse in the Age of Show Business "
	},
	{
		title: "Introduction of a new order of things",
		date: "1515",
    url: "quotes/introduction-of-a-new-order-of-things.html",
		content: "And it ought to be remembered that there is nothing more difficult to take in hand more perilous to conduct or more uncertain in its success than to take the lead in the introduction of a new order of things Because the innovator has for enemies all those who have done well under the old conditions and lukewarm defenders in those who may do well under the new This coolness arises partly from fear of the opponents who have the laws on their side and partly from the incredulity of men who do not readily believe in new things until they have had a long experience of them Niccolò Machiavelli  The Prince "
	},
	{
		title: "We are innately equipped to cooperate",
		date: "",
    url: "quotes/we-are-innately-equipped-to-cooperate.html",
		content: "Living socially places special demands on us and many cognitive capacities and behavioral repertoires evolved in order for us to cope For example we are innately equipped to cooperate and living in cooperative groups favors certain genetic predispositions related to kindness and reciprocity Nicholas A. Christakis Greek-American sociologist and physician Blueprint: The Evolutionary Origins of a Good Society "
	},
	{
		title: "The drive to love your partner is universal",
		date: "",
    url: "quotes/the-drive-to-love-your-partner-is-universal.html",
		content: "That feature a key characteristic of our species is the pair bond between sexual partners a special kind of attachment to one s mate that we humans surely inherited from our primate ancestors that is seen in cultures with all marriage types and that people experience as love The drive to love your partner is universal Nicholas Christakis Greek-American sociologist and physician Blueprint: The Evolutionary Origins of a Good Society "
	},
	{
		title: "The Social Suite",
		date: "2019",
    url: "quotes/the-social-suite.html",
		content: "At the core of all societies I will show is the social suite 1 The capacity to have and recognize individual identity 2 Love for partners and offspring 3 Friendship 4 Social networks 5 Cooperation 6 Preference for one s own group that is in group bias 7 Mild hierarchy that is relative egalitarianism 8 Social learning and teaching Nicholas Christakis Greek-American sociologist and physician Blueprint: The Evolutionary Origins of a Good Society "
	},
	{
		title: "Unlike cynicism, hopefulness is hard-earned",
		date: "2022-04",
    url: "quotes/unlike-cynicism-hopefulness-is-hard-earned.html",
		content: "Unlike cynicism hopefulness is hard earned makes demands upon us and can often feel like the most indefensible and lonely place on Earth Hopefulness is not a neutral position either It is adversarial It is the warrior emotion that can lay waste to cynicism Each redemptive or loving act as small as you like Valerio such as reading to your little boy or showing him a thing you love or singing him a song or putting on his shoes keeps the devil down in the hole It says the world and its inhabitants have value and are worth defending It says the world is worth believing in In time we come to find that it is so Nick Cave Australian musician, writer and actor The Red Hand Files "
	},
	{
		title: "The language of religion and poetry",
		date: "1927",
    url: "quotes/the-language-of-religion-and-poetry.html",
		content: "We ought to remember that religion uses language in quite a different way from science The language of religion is more closely related to the language of poetry than to the language of science True we are inclined to think that science deals with information about objective facts and poetry with subjective feelings Hence we conclude that if religion does indeed deal with objective truths it ought to adopt the same criteria of truth as science But I myself find the division of the world into an objective and a subjective side much too arbitrary The fact that religions through the ages have spoken in images parables and paradoxes means simply that there are no other ways of grasping the reality to which they refer But that does not mean that it is not a genuine reality And splitting this reality into an objective and a subjective side won t get us very far Niels Bohr Danish physicist Physics and Beyond: Encounters and Conversations "
	},
	{
		title: "The Other Side of Complexity",
		date: "",
    url: "quotes/the-other-side-of-complexity.html",
		content: "I would not give a fig for the simplicity this side of complexity but I would give my life for the simplicity on the other side of complexity Oliver Wendell Holmes  unknown "
	},
	{
		title: "Little things seen largely",
		date: "1925",
    url: "quotes/little-things-seen-largely.html",
		content: "To anyone who finds that linguistic study is a worthless finicking with trifles I would reply that life consists of little things the important matter is to see them largely Otto Jespersen  Retirement address "
	},
	{
		title: "Art is a lie that makes us realize truth",
		date: "1923",
    url: "quotes/art-is-a-lie-that-makes-us-realize-truth.html",
		content: "We all know that Art is not truth Art is a lie that makes us realize truth at least the truth that is given us to understand The artist must know the manner whereby to convince others of the truthfulness of his lies If he only shows in his work that he has searched and re searched for the way to put over lies he would never accomplish anything Pablo Picasso Spanish painter, sculptor, printmaker, ceramicist and theatre designer The Arts "
	},
	{
		title: "What makes an activity meaningful?",
		date: "",
    url: "quotes/what-makes-an-activity-meaningful.html",
		content: "A meaningful activity is oriented toward a goal one that if accomplished would have an impact on the world and this usually means that it has an impact on other people This activity has some structure it s the sort of thing that one can tell a story about It connects to spirituality and often connects to flow leading to experience of self loss and often brings you into close contact with other people and is often seen as morally virtuous Paul Bloom Canadian American psychologist The Sweet Spot "
	},
	{
		title: "Meaningful Activities",
		date: "2021",
    url: "quotes/meaningful-activities.html",
		content: "A meaningful activity is oriented toward a goal one that if accomplished would have an impact on the world and this usually means that it has an impact on other people This activity extends across a significant portion of one s life and has some structure it s the sort of thing that one can tell a story about It often connects to religion and spirituality and often connects to flow leading to the experience of self loss and often brings you into close contact with other people and is often seen as morally virtuous but none of these additional features are essential Paul Bloom Canadian American psychologist The Sweet Spot "
	},
	{
		title: "The Ultimate Democracy",
		date: "2012",
    url: "quotes/the-ultimate-democracy.html",
		content: " we were the ultimate democracy If one of us didn t like a tune we didn t play it Paul McCartney Canadian cultural anthropologist, ethnobotanist, author, and photographer Rolling Stone "
	},
	{
		title: "To build a new and vital commons sector",
		date: "",
    url: "quotes/to-build-a-new-and-vital-commons-sector.html",
		content: "The great task of the twenty first century is to build a new and vital commons sector that can resist enclosure and externalization by the market protect the planet and share the fruits of our common inheritances more equitably than is now the case Peter Barnes American entrepreneur, environmentalist, and journalist  "
	},
	{
		title: "Power and Privilege have been amassed",
		date: "18 Jun 2020",
    url: "quotes/power-and-privilege-have-been-amassed.html",
		content: "I see instead a world of a permanent war economy manipulation of money and credit and rent seeking society that privileges some at the expense of others all of which distort and damage our politics our markets and our society In essence Power and Privilege have been amassed in an effort to govern over rather than a self governing democratic era where we dissipate power and deny privilege and seek to govern with each other as dignified equals True liberalism in this sense would be seen as the emancipatory philosophy that it was written to be seeking to eradicate the bonds of oppression imposed by the Altar the Crown the Sword and from both crushing poverty and the protected privileges of the mercantilist class Peter Boettke  A Conversation with Peter Boettke "
	},
	{
		title: "By Gifts One Makes Slaves",
		date: "1961",
    url: "quotes/by-gifts-one-makes-slaves.html",
		content: " Up in our country we are human said the hunter And since we are human we help each other We don t like to hear anybody say thanks for that What I get today you may get tomorrow Up here we say that by gifts one makes slaves and by whips one makes dogs Peter Freuchen  Book of the Eskimo "
	},
	{
		title: "Facts are Facts",
		date: "Feb 18, 2017",
    url: "quotes/facts-are-facts.html",
		content: "Facts are facts they are ascertainable through honest open minded and diligent reporting truth is attainable by laying fact upon fact much like the construction of a cathedral and truth is not merely in the eye of the beholder Peter Kann  Time Magazine "
	},
	{
		title: "Learning from Experience",
		date: "1990",
    url: "quotes/learning-from-experience.html",
		content: "The most powerful learning comes from direct experience But what happens when we can no longer observe the consequences of our actions Herein lies the core <em>learning dilemma< em> that confronts organizations <em> we learn best from experience but we never directly experience the consequences of many of our most important decisions < em> The most critical decisions made in organizations have systemwide consequences that stretch over years or decades Peter Senge  The Fifth Discipline: The Art and Practice of the Learning Organization "
	},
	{
		title: "The conquest of nature",
		date: "1962",
    url: "quotes/the-conquest-of-nature.html",
		content: "Man has long talked somewhat arrogantly about the conquest of nature now he has the power to achieve his boast It is our misfortune it may well be our final tragedy that this power has not been tempered with wisdom but has been marked by irresponsibility that there is all too little awareness that man is part of nature and that the price of conquest may well be the destruction of man himself Rachel Carson American marine biologist, writer, and conservationist Rachel Carson Speech at Scripps College "
	},
	{
		title: "Your generation must come to terms with the environment",
		date: "1962-06",
    url: "quotes/your-generation-must-come-to-terms-with-the-environment.html",
		content: "The stream of time moves forward and mankind moves with it Your generation must come to terms with the environment You must face realities instead of taking refuge in ignorance and evasion of truth Yours is a grave and sobering responsibility but it is also a shining opportunity You go out into a world where mankind is challenged as it has never been challenged before to prove its maturity and its mastery not of nature but of itself Therein lies our hope and our destiny Rachel Carson American marine biologist, writer, and conservationist 1962 Commencement Address at Scripps College "
	},
	{
		title: "A foolish consistency",
		date: "1841",
    url: "quotes/a-foolish-consistency.html",
		content: "A foolish consistency is the hobgoblin of little minds adored by little statesmen and philosophers and divines Ralph Waldo Emerson American essayist, lecturer, philosopher, abolitionist and poet who led the transcendentalist movement of the mid-19th century Essential Writings of Ralph Waldo Emerson "
	},
	{
		title: "Finish every day and be done with it",
		date: "1854-04-08",
    url: "quotes/finish-every-day-and-be-done-with-it.html",
		content: "Finish every day and be done with it For manners and for wise living it is a vice to remember You have done what you could some blunders and absurdities no doubt crept in forget them as fast as you can Tomorrow is a new day You shall begin it well and serenely and with too high a spirit to be cumbered with your old nonsense This day for all that is good and fair It is too dear with its hopes and invitations to waste a moment on the rotten yesterdays Ralph Waldo Emerson American essayist, lecturer, philosopher, abolitionist and poet who led the transcendentalist movement of the mid-19th century To Daughter Ellen "
	},
	{
		title: "The time-worn yoke of their opinions",
		date: "1860",
    url: "quotes/the-time-worn-yoke-of-their-opinions.html",
		content: "He who should inspire and lead his race must be defended from travelling with the souls of other men from living breathing reading and writing in the daily time worn yoke of their opinions Ralph Waldo Emerson American essayist, lecturer, philosopher, abolitionist and poet who led the transcendentalist movement of the mid-19th century The Conduct of Life "
	},
	{
		title: "Start with romance and build to a reality",
		date: "12 Nov 1971",
    url: "quotes/start-with-romance-and-build-to-a-reality.html",
		content: "I think it s part of the nature of man to start with romance and build to a reality There s hardly a scientist or an astronaut I ve met who wasn t beholden to some romantic before him who led him to doing something in life Ray Bradbury American author and screenwriter Mars and the Mind of Man "
	},
	{
		title: "People ask me to predict the future",
		date: "1979",
    url: "quotes/people-ask-me-to-predict-the-future.html",
		content: "People ask me to predict the future when all I want to do is prevent it Better yet build it Predicting the future is much too easy anyway You look at the people around you the street you stand on the visible air you breathe and predict more of the same To hell with more I want better Ray Bradbury American author and screenwriter Beyond 1984: The People Machines "
	},
	{
		title: "The Third Place",
		date: "1989",
    url: "quotes/the-third-place.html",
		content: "Most needed are those third places which lend a public balance to the increased privatization of home life Third places are nothing more than informal public gathering places The phrase third places derives from considering our homes to be the first places in our lives and our work places the second Ray Oldenburg  The Great Good Place "
	},
	{
		title: "Down These Mean Streets",
		date: "1945",
    url: "quotes/down-these-mean-streets.html",
		content: "Down these mean streets a man must go who is not himself mean who is neither tarnished nor afraid If there were enough like him I think the world would be a very safe place to live in and yet not too dull to be worth living in Raymond Chandler American-British novelist and screenwriter The Simple Art of Murder "
	},
	{
		title: "Vital and Significant Forms of Art",
		date: "1945",
    url: "quotes/vital-and-significant-forms-of-art.html",
		content: "Nor is it any part of my thesis to maintain that it the detective story is a vital and significant form of art There are no vital and significant forms of art there is only art and precious little of that The growth of populations has in no way increased the amount it has merely increased the adeptness with which substitutes can be produced and packaged Raymond Chandler American-British novelist and screenwriter The Simple Art of Murder "
	},
	{
		title: "I'll take the big sordid dirty crooked city",
		date: "1953",
    url: "quotes/ill-take-the-big-sordid-dirty-crooked-city.html",
		content: "The other part of me wanted to get out and stay out But this was the part I never listened to Because if I ever had I would have stayed in the town where I was born and worked in the hardware store and married the boss s daughter and had five kids and read them the funny paper on Sunday morning and smacked their heads when they got out of line and squabbled with the wife about how much spending money they were to get and what programs they could have on the radio or TV set I might even have got rich small town rich an eight room house two cars in the garage chicken every Sunday and the <em>Reader s Digest< em> on the living room table the wife with a cast iron permanent and me with a brain like a sack of Portland cement You take it friend I ll take the big sordid dirty crooked city Raymond Chandler American-British novelist and screenwriter The Long Goodbye "
	},
	{
		title: "Most advertising an insane irrelevance",
		date: "1961",
    url: "quotes/most-advertising-an-insane-irrelevance.html",
		content: "It is often said that our society is too materialist and that advertising reflects this But it seems to me that in this respect our society is quite evidently not materialist enough and that this paradoxically is the result of a failure in social meaning values and ideals If we were sensibly materialist in that part of our living in which we use things we should find most advertising to be of an insane irrelevance Beer would be enough for us without the additional promise that in drinking it we show ourselves to be manly young in heart or neighborly A washing machine would be a useful machine to wash clothes rather than an indication that we are forward looking or an object of envy to our neighbors Raymond Williams Welsh socialist writer, academic, novelist and critic influential within the New Left New Left Review "
	},
	{
		title: "Wonderment is the first passion of all",
		date: "1649",
    url: "quotes/wonderment-is-the-first-passion-of-all.html",
		content: "When our first encounter with some object takes us by surprise and we judge it to be new or very different from what we have previously experienced or from what we expected it to be this causes us to wonder at it and be astonished And because this can happen before we have any knowledge of whether the thing is beneficial to us or not it seems to me that wonderment is the first passion of all And it has no contrary because if the object that presents itself has nothing in itself to surprise us we are not moved by it in any way and we consider it without any passion René Descartes French philosopher, mathematician, and scientist The Passions of the Soul "
	},
	{
		title: "You can't dance cheerfully",
		date: "1958",
    url: "quotes/you-cant-dance-cheerfully.html",
		content: "As a dancing partner Rose Tuttle was not a bargain She was equipped for it physically and she had some idea of rhythm that wasn t it it was her basic attitude She danced cheerfully and of course that was no good You can t dance cheerfully Dancing is too important It can be wild or solemn or gay or lewd or art for art s sake but it can t be cheerful Rex Stout  Champagne for One "
	},
	{
		title: "Evolutionary Drive Towards Complexity",
		date: "2006",
    url: "quotes/evolutionary-drive-towards-complexity.html",
		content: "The evolutionary drive towards complexity comes in those lineages where it comes at all not from any inherent propensity for increased complexity and not from biased mutation It comes from natural selection the process which as far as we know is the only process ultimately capable of generating complexity out of simplicity Richard Dawkins British evolutionary biologist The God Delusion "
	},
	{
		title: "The limitations of specialization",
		date: "1956-05-02",
    url: "quotes/the-limitations-of-specialization.html",
		content: "In this age of specialization men who thoroughly know one field are often incompetent to discuss another The great problems of the relations between one and another aspect of human activity have for this reason been discussed less and less in public When we look at the past great debates on these subjects we feel jealous of those times for we should have liked the excitement of such argument The old problems such as the relation of science and religion are still with us and I believe present as difficult dilemmas as ever but they are not often publicly discussed because of the limitations of specialization Richard Feynman American theoretical physicist Feynman 1956 remarks at a Caltech YMCA Lunch Forum "
	},
	{
		title: "The Paranoid Style in American Politics",
		date: "1964-11",
    url: "quotes/the-paranoid-style-in-american-politics.html",
		content: "American politics has often been an arena for angry minds In recent years we have seen angry minds at work mainly among extreme right wingers who have now demonstrated in the Goldwater movement how much political leverage can be got out of the animosities and passions of a small minority But behind this I believe there is a style of mind that is far from new and that is not necessarily right wing I call it the paranoid style simply because no other word adequately evokes the sense of heated exaggeration suspiciousness and conspiratorial fantasy that I have in mind In using the expression paranoid style I am not speaking in a clinical sense but borrowing a clinical term for other purposes I have neither the competence nor the desire to classify any figures of the past or present as certifiable lunatics In fact the idea of the paranoid style as a force in politics would have little contemporary relevance or historical value if it were applied only to men with profoundly disturbed minds It is the use of paranoid modes of expression by more or less normal people that makes the phenomenon significant Richard Hofstadter American historian and public intellectual Harper's Magazine "
	},
	{
		title: "Competition is not separable from endless flavors of cooperation",
		date: "2018",
    url: "quotes/competition-is-not-separable-from-endless-flavors-of-cooperation.html",
		content: "Her trees are far more social than even Patricia suspected There are no individuals There aren t even separate species Everything in the forest is the forest Competition is not separable from endless flavors of cooperation Trees fight no more than do the leaves on a single tree It seems most of nature isn t red in tooth and claw after all For one those species at the base of the living pyramid have neither teeth nor talons But if trees share their storehouses then every drop of red must float on a sea of green Richard Powers  The Overstory "
	},
	{
		title: "A Hundred Species of Love",
		date: "2018",
    url: "quotes/a-hundred-species-of-love.html",
		content: "She takes his shaking hand in the dark It feels good like a root must feel when it finds after centuries another root to pleach to underground There are a hundred species of love separately invented each more ingenious than the last and every one of them keeps making things Richard Powers  The Overstory "
	},
	{
		title: "The only dependable things are humility and looking",
		date: "2018",
    url: "quotes/the-only-dependable-things-are-humility-and-looking.html",
		content: "Watching the man hard of hearing hard of speech Patty learns that real joy consists of knowing that human wisdom counts less than the shimmer of beeches in a breeze As certain as weather is coming from the west the things people know for sure will change There is no knowing for a fact The only dependable things are humility and looking Richard Powers  The Overstory "
	},
	{
		title: "Which side will lose by winning",
		date: "2018",
    url: "quotes/which-side-will-lose-by-winning.html",
		content: "Aspens are withering Grazed on by everything with hooves cut off from rejuvenating fire whole groves are vanishing Now she sees a forest spreading across these mountains since before humans left Africa giving way to second homes She sees it in one great glimpse of flashing gold trees and humans at war over the land and water and atmosphere And she can hear louder than the quaking leaves which side will lose by winning Richard Powers  The Overstory "
	},
	{
		title: "The world is failing precisely because",
		date: "2018",
    url: "quotes/the-world-is-failing-precisely-because.html",
		content: "To be human is to confuse a satisfying story with a meaningful one and to mistake life for something huge with two legs No life is mobilized on a vastly larger scale and the world is failing precisely because no novel can make the contest for the world seem as compelling as the struggles between a few lost people Richard Powers  The Overstory "
	},
	{
		title: "Nature transcends our tendencies to label and classify",
		date: "2023",
    url: "quotes/nature-transcends-our-tendencies-to-label-and-classify.html",
		content: "If you re picking colors based on a Pantone book you re limited to a certain number of choices If you step out in nature the palette is infinite Each rock has such a variation of color within it we could never find a can of paint to mimic the exact same shade Nature transcends our tendencies to label and classify to reduce and limit The natural world is unfathomably more rich interwoven and complicated than we are taught and so much more mysterious and beautiful Rick Rubin American record executive and record producer The Creative Act: A Way of Being "
	},
	{
		title: "Public morality",
		date: "2018",
    url: "quotes/public-morality.html",
		content: "Moral guidance about what is right or decent can be found both in religious teachings and in our contemporary understanding of what we owe one another as members of the same society As I have suggested they overlap A public morality that protects our democratic institutions cherishes the truth accepts our differences ensures equal rights and equal opportunity and invites passionate enagement in our civic life gives our own lives deeper meaning It enlarges our capacities for attachment and love It informs our sense of honor and shame It equips us to be virtuous citizens Robert B. Reich  The Common Good "
	},
	{
		title: "Public Truth",
		date: "2018",
    url: "quotes/public-truth.html",
		content: "Reviving the common good also depends on each of us taking responsibility for finding sharing and insisting upon public truth By public truth I mean facts about what is happening around us that could affect our well being as well as clear logic about the significance of those facts and reasoned analysis about their practical consequences Robert B. Reich  The Common Good "
	},
	{
		title: "To differentiate truth from falsehood",
		date: "2018",
    url: "quotes/to-differentiate-truth-from-falsehood.html",
		content: "It is the civic responsibility of all of us to check the facts we read or hear to find and depend upon reliable sources to share the truth with others and hold accountable those who lie to us or suppress the truth We must also ensure that every American has sufficient education to differentiate truth from falsehood and to think critically about what they read and see Robert B. Reich  The Common Good "
	},
	{
		title: "Cockpits with Instruments Controlled by Gremlins",
		date: "1996",
    url: "quotes/cockpits-with-instruments-controlled-by-gremlins.html",
		content: "One frequent analogy casts the manager in the role of an airplane pilot guided by organizational measures that are like cockpit instruments Mechanistic and organic analogies are flawed because they are too simplistic Kaplan and Norton s cockpit analogy would be more accurate if it included a multitude of tiny gremlins controlling wing flaps fuel flow and so on of a plane being buffeted by winds and generally struggling against nature but with the gremlins always controlling information flow back to the cockpit instruments for fear that the pilot might find gremlin replacements It would not be surprising if airplanes guided this way occasionally flew into mountainsides when they seemed to be progressing smoothly toward their destinations Robert D. Austin  Measuring and Managing Performance in Organizations "
	},
	{
		title: "A continuous effort to make sense of things",
		date: "21 Dec 2000",
    url: "quotes/a-continuous-effort-to-make-sense-of-things.html",
		content: "Unlike modern readers who follow the flow of a narrative from beginning to end early modern Englishmen read in fits and starts and jumped from book to book They broke texts into fragments and assembled them into new patterns by transcribing them in different sections of their notebooks Then they reread the copies and rearranged the patterns while adding more excerpts Reading and writing were therefore inseparable activities They belonged to a continuous effort to make sense of things for the world was full of signs you could read your way through it and by keeping an account of your readings you made a book of your own one stamped with your personality Robert Darnton American cultural historian and academic librarian Extraordinary Commonplaces "
	},
	{
		title: "Daily Acts of Trivia",
		date: "",
    url: "quotes/daily-acts-of-trivia.html",
		content: "In the absence of clearly defined goals we become strangely loyal to performing daily acts of trivia Robert Heinlein  unknown "
	},
	{
		title: "Investing in other people's children",
		date: "2014",
    url: "quotes/investing-in-other-peoples-children.html",
		content: "All of the great advances in our society have come when we have made investments in other people s children Robert Putnam American leader of organized labor and civil rights activist WTF: What's the Future and Why It's Up To Us "
	},
	{
		title: "Ism-mania",
		date: "1938",
    url: "quotes/ism-mania.html",
		content: "Grandpa Penny why don t you write a play about ism mania Penny Ism mania Grandpa Yeah sure you know communism fascism voodooism Everybody s got an ism these days Penny I feel like I ve got this itch or something Grandpa It s just as catching When things go a little bad nowadays you go out and get yourself an ism and you re in business Penny I ve got it It might help Cynthia to have an ism in the monastery Grandpa It might at that Only give her Americanism Let her know something about Americans John Paul Jones Patrick Henry Samuel Adams Washington Jefferson Monroe Lincoln Grant Lee Edison Mark Twain When things got tough for those boys they didn t run around looking for isms Lincoln said With malice toward none with charity for all Nowadays they say Think the way I do or I ll bomb the daylights out of you Robert Riskin  You Can't Take It With You "
	},
	{
		title: "People are finally finding out that the guy next door isn't a bad egg",
		date: "1941",
    url: "quotes/people-are-finally-finding-out-that-the-guy-next-door-isnt-a-bad-egg.html",
		content: "You mean to tell me you d try to kill the John Doe movement if you can t use it to get what you want Well that certainly is a new low You sit there with your big cigars and think of deliberately killing an idea that has made millions of people a little bit happier Why look I m just a mug and I know it but I m beginning to understand a lot of things Why your types are as old as history If you can t lay your dirty fingers on a decent idea and twist it and squeeze it and stuff it into your own pocket you slap it down Like dogs if you can t eat something you bury it Why this is the one worthwhile idea that s come along People are finally finding out that the guy next door isn t a bad egg That s simple isnt it And yet a thing like that has got a chance to spread till it touches every last doggone human being in the world and you talk about killing it Well when this fire dies down what s going to be left More misery More hunger and more hate And what s to prevent that from starting all over again Nobody knows the answer to that one The John Doe idea may be the answer though it may be the one thing capable of saving this cockeyed world yet you sit back there on your fat hulks and tell me you ll kill it if you can t use it Well you go ahead and try you couldn t do it in a million years with all your radio stations and all your power Down and out pitcher Long John Willoughby to industrialist D B Norton Robert Riskin  Meet John Doe "
	},
	{
		title: "Between Stimulus and Response",
		date: "1963",
    url: "quotes/between-stimulus-and-response.html",
		content: "Freedom is the individual s capacity to know that he is the determined one to pause between stimulus and response and thus to throw his weight however slight it may be on the side of one particular response among several possible ones Indeed I would define mental health as the capacity to be aware of the gap between stimulus and response together with the capacity to use this gap constructively Rollo May American existential psychologist Freedom and Responsibility Re-Examined "
	},
	{
		title: "The new form of the problem of identity",
		date: "1969",
    url: "quotes/the-new-form-of-the-problem-of-identity.html",
		content: "The individual is forced to turn inward he becomes obsessed with the new form of the problem of identity namely Even if I know who I am I have no significance I am unable to influence others The next step is apathy And the step following that is violence For no human being can stand the perpetually numbing experiene of his own powerlessness Rollo May American existential psychologist Love and Will "
	},
	{
		title: "Steve Jobs Ideals",
		date: "01/30/2012",
    url: "quotes/steve-jobs-ideals.html",
		content: "Q What ideals have you embraced from Steve Jobs A The importance of doing everything you do to your very best And that the journey is the reward If you do things well one at a time you end up in a really good place Don t get ahead of yourself Control the things you can Ron Johnson  The Seattle Times "
	},
	{
		title: "The more they yearned for omnipotence",
		date: "1962",
    url: "quotes/the-more-they-yearned-for-omnipotence.html",
		content: "Blackwell was a sad and troubled man hardly competent to play God with anybody s life But the sadder and more troubled they were the more they yearned for omnipotence The really troubled ones believed they had it Ross MacDonald Ross Macdonald is the main pseudonym that was used by the American-Canadian writer of crime fiction Kenneth Millar The Zebra-Striped Hearse "
	},
	{
		title: "Moving across the city's great broken body",
		date: "1968",
    url: "quotes/moving-across-the-citys-great-broken-body.html",
		content: "I had to admit to myself that I lived for nights like these moving across the city s great broken body making connections among its millions of cells I had a crazy wish or fantasy that some day before I died if I made all the right neural connections the city would come all the way alive Like the Bride of Frankenstein Ross MacDonald Ross Macdonald is the main pseudonym that was used by the American-Canadian writer of crime fiction Kenneth Millar The Instant Enemy "
	},
	{
		title: "Thinking should be generous and have a good appetite",
		date: "2016",
    url: "quotes/thinking-should-be-generous-and-have-a-good-appetite.html",
		content: "Thinking should be generous and have a good appetite I find life far too valuable these days to shut out most of its variety in favour of digging down into the depths Sarah Bakewell  At the Existentialist Café: Freedom, Being, and Apricot Cocktails "
	},
	{
		title: "Continually debating people and never winning",
		date: "2014",
    url: "quotes/continually-debating-people-and-never-winning.html",
		content: "If your view of the world is that people use reason for their important decisions you are setting yourself up for a life of frustration and confusion You ll find yourself continually debating people and never winning except in your own mind Few things are as destructive and limiting as a worldview that assumes people are mostly rational Scott Adams American author and cartoonist How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life "
	},
	{
		title: "The system-vs-goals model",
		date: "2014",
    url: "quotes/the-system-vs-goals-model.html",
		content: "If you do something every day it s a system If you re waiting to achieve it someday in the future it s a goal O ne should have a system instead of a goal The system versus goals model can be applied to most human endeavours In the world of dieting losing twenty pounds is a goal but eating right is a system In the exercise realm running a marathon in under four hours is a goal but exercising daily is a system In business making a million dollars is a goal but being a serial entrepreneur is a system Goal oriented people exist in a state of continuous pre success failure at best and permanent failure at worst if things never work out Systems people succeed every time they apply their systems in the sense that they did what they intended to do The goals people are fighting the feeling of discouragement at each turn The systems people are feeling good every time they apply their system That s a big difference in terms of maintaining your personal energy in the right direction Scott Adams American author and cartoonist How to Fail at Almost Everything and Still Win Big: Kind of the Story of My Life "
	},
	{
		title: "The Myth of Simple Truths",
		date: "2016-01-04",
    url: "quotes/the-myth-of-simple-truths.html",
		content: "It would be a wonderful world were the Simple Truth Thesis true Our political task simply would be to empower those who know the simple truth and rebuke the fools who do not But the Simple Truth Thesis is not true In fact it s a fairytale soothing but ultimately unfit for a serious mind For any Big Question there are several defensible positions it is precisely this feature that makes them big Of course to say that a position is defensible is not to say that it s true To oppose the Simple Truth Thesis is not to embrace relativism which is itself a version of the Simple Truth view nor is it to give up on the idea that there is truth it is rather to give up on the view that the truth is always simple Scott F. Aikin and Robert B. Talisse  The Myth of Simple Truths "
	},
	{
		title: "Ceremonies are designed to",
		date: "2016",
    url: "quotes/ceremonies-are-designed-to.html",
		content: "In all cultures ceremonies are designed to communicate the experience of one group of people to the wider community When people bury loved ones when they wed when they graduate from college the respective ceremonies communicate something essential to the people who are watching Sebastian Junger American journalist, author and filmmaker Tribe: On Homecoming and Belonging "
	},
	{
		title: "The group of people that you would both help feed and help defend",
		date: "2016",
    url: "quotes/the-group-of-people-that-you-would-both-help-feed-and-help-defend.html",
		content: "Two of the behaviors that set early humans apart were the systematic sharing of food and altruistic group defense Other primates did very little of either but increasingly hominids did and those behaviors set them on an evolutionary path that produced the modern world The earliest and most basic definition of community of tribe would be the group of people that you would both help feed and help defend A society that doesn t offer its members the chance to act selflessly in these ways isn t a society in any tribal sense of the word it s just a political entity that lacking enemies will probably fall apart on its own Sebastian Junger American journalist, author and filmmaker Tribe: On Homecoming and Belonging "
	},
	{
		title: "Individualized lifestyles deeply brutalizing to the human spirit",
		date: "2016",
    url: "quotes/individualized-lifestyles-deeply-brutalizing-to-the-human-spirit.html",
		content: "Most primates including humans are intensely social and there are very few instances of lone primates surviving in the wild A modern soldier returning from combat or a survivor of Sarajevo goes from the kind of close knit group that humans evolved for back into a society where most people work outside the home children are educated by strangers families are isolated from wider communities and personal gain almost completely eclipses collective good Even if he or she is part of a family that is not the same as belonging to a group that shares resources and experiences almost everything collectively Whatever the technological advances of modern society and they re nearly miraculous the individualized lifestyles that those technologies spawn seem to be deeply brutalizing to the human spirit Sebastian Junger American journalist, author and filmmaker Tribe: On Homecoming and Belonging "
	},
	{
		title: "Social resilience",
		date: "2016",
    url: "quotes/social-resilience.html",
		content: "Recent studies of something called social resilience have identified resource sharing and egalitarian wealth distribution as major components of a society s ability to recover from hardship Sebastian Junger American journalist, author and filmmaker Tribe: On Homecoming and Belonging "
	},
	{
		title: "We should always be fighting evil",
		date: "2003",
    url: "quotes/we-should-always-be-fighting-evil.html",
		content: "All I tried to do in my stories was show that there s some innate goodness in the human condition And there s always going to be evil we should always be fighting evil Stan Lee  Reform Judaism Online "
	},
	{
		title: "Most humans desire cultural stability, not change",
		date: "21 Sep 2018",
    url: "quotes/most-humans-desire-cultural-stability-not-change.html",
		content: "All of this confirms something that I ve long suspected Most humans until very recently desired and maintained cultural stability not change Change was a threat and was embraced only when absolutely necessary Stephen E. Nash  Sapiens.org "
	},
	{
		title: "People with Passion",
		date: "",
    url: "quotes/people-with-passion.html",
		content: "People with passion can change the world for the better Steve Jobs American business magnate, industrial designer, investor, and media proprietor unknown "
	},
	{
		title: "Selling sugared water",
		date: "1987",
    url: "quotes/selling-sugared-water.html",
		content: "Do you want to spend the rest of your life selling sugared water or do you want a chance to change the world Steve Jobs American business magnate, industrial designer, investor, and media proprietor made to John Sculley to convince him to leave Pepsi and become CEO of Apple "
	},
	{
		title: "A bicycle for our minds",
		date: "1990",
    url: "quotes/a-bicycle-for-our-minds.html",
		content: "I read a study that measured the efficiency of locomotion for various species on the planet The condor used the least energy to move a kilometer Humans came in with a rather unimpressive showing about a third of the way down the list It was not too proud of a showing for the Crown of Creation That didn t look so good but then someone at Scientific American had the insight to test the efficiency of locomotion for a man on a bicycle and a human on a bicycle blew the condor away That s what a computer is to me the computer is the most remarkable tool that we ve ever come up with It s the equivalent of a bicycle for our minds Steve Jobs American business magnate, industrial designer, investor, and media proprietor Memory &amp; Imagination: New Pathways to the Library of Congress "
	},
	{
		title: "Technology married with the humanities",
		date: "March-April 1991",
    url: "quotes/technology-married-with-the-humanities.html",
		content: "Technology alone is not enough It s technology married with the liberal arts married with the humanities that yields the results that makes our hearts sing Nowhere is that more true than in these post PC devices that need to be even easier to use than a PC that need to be even more intuitive than a PC and where the software and the hardware and the applications need to intertwine in an even more seamless way than they do on a PC We think we are on the right track with this We think we have the right architecture not just in silicon but in the organization to build these kinds of products Steve Jobs American business magnate, industrial designer, investor, and media proprietor Harvard Business Review "
	},
	{
		title: "Life can be much broader",
		date: "1994",
    url: "quotes/life-can-be-much-broader.html",
		content: "When you grow up you tend to get told that the world is the way it is and your life is just to live your life inside the world Try not to bash into the walls too much Try to have a nice family have fun save a little money That s a very limited life Life can be much broader once you discover one simple fact Everything around you that you call life was made up by people that were no smarter than you and you can change it you can influence it you can build your own things that other people can use Steve Jobs American business magnate, industrial designer, investor, and media proprietor Santa Clara Valley Historical Association "
	},
	{
		title: "The Underlying Principle of the Problem",
		date: "2000",
    url: "quotes/the-underlying-principle-of-the-problem.html",
		content: "When you start looking at a problem and it seems really simple you don t really understand the complexity of the problem Then you get into the problem and you see that it s really complicated and you come up with all these convoluted solutions That s sort of the middle and that s where most people stop But the really great person will keep on going and find the key the underlying principle of the problem and come up with an elegant really beautiful solution that works That s what we wanted to do with Mac Steve Jobs American business magnate, industrial designer, investor, and media proprietor Insanely Great: The Life and Times of Macintosh, the Computer that Changed Everything "
	},
	{
		title: "Design is the fundamental soul of a man-made creation",
		date: "2000-01-24",
    url: "quotes/design-is-the-fundamental-soul-of-a-man-made-creation.html",
		content: "In most people s vocabularies design means veneer It s interior decorating It s the fabric of the curtains and the sofa But to me nothing could be further from the meaning of design Design is the fundamental soul of a man made creation that ends up expressing itself in successive outer layers of the product or service Steve Jobs American business magnate, industrial designer, investor, and media proprietor Apple's One-Dollar-a-Year Man "
	},
	{
		title: "Good Management is Like The Beatles",
		date: "October, 2004",
    url: "quotes/good-management-is-like-the-beatles.html",
		content: "My model of management is the Beatles The reason I say that is because each of the key people in the Beatles kept the others from going off in the directions of their bad tendencies They sort of kept each other in check And then when they split up they never did anything as good It was the chemistry of a small group of people and that chemistry was greater than the sum of the parts Steve Jobs American business magnate, industrial designer, investor, and media proprietor Brent Schlender's Conversations with Steve Jobs "
	},
	{
		title: "Making something with a great deal of care and love",
		date: "2007",
    url: "quotes/making-something-with-a-great-deal-of-care-and-love.html",
		content: "One of the ways that I believe people express their appreciation to the rest of humanity is to make something wonderful and put it out there And you never meet the people You never shake their hands You never hear their story or tell yours But somehow in the act of making something with a great deal of care and love something s transmitted there And it s a way of expressing to the rest of our species our deep appreciation So we need to be true to who we are and remember what s really important to us Steve Jobs American business magnate, industrial designer, investor, and media proprietor  "
	},
	{
		title: "Where the Puck is Going to Be",
		date: "2007",
    url: "quotes/where-the-puck-is-going-to-be.html",
		content: "There s an old Wayne Gretzky quote that I love I skate to where the puck is going to be not where it has been And we ve always tried to do that at Apple Since the very very beginning And we always will Steve Jobs American business magnate, industrial designer, investor, and media proprietor Macworld Keynote "
	},
	{
		title: "The axis is constructive-destructive",
		date: "2010",
    url: "quotes/the-axis-is-constructive-destructive.html",
		content: "The axis today is not liberal and conservative the axis is constructive destructive and you ve cast your lot with the destructive people Fox has become an incredibly destructive force in our society You can be better and this is going to be your legacy if you re not careful Steve Jobs American business magnate, industrial designer, investor, and media proprietor Conversation with Rupert Murdoch "
	},
	{
		title: "We have wonderful arguments",
		date: "06/07/2010",
    url: "quotes/we-have-wonderful-arguments.html",
		content: "Jobs What I do all day is meet with teams of people and work on ideas and solve problems to make new products to make new marketing programs whatever it is Mossberg And are people willing to tell you you re wrong Jobs laughs Yeah Mossberg I mean other than snarky journalists I mean people that work for Jobs Oh yeah no we have wonderful arguments Mossberg And do you win them all Jobs Oh no I wish I did No you see you can t If you want to hire great people and have them stay working for you you have to let them make a lot of decisions and you have to you have to be run by ideas not hierarchy The best ideas have to win otherwise good people don t stay Mossberg But you must be more than a facilitator who runs meetings You obviously contribute your own ideas Jobs I contribute ideas sure Why would I be there if I didn t Steve Jobs American business magnate, industrial designer, investor, and media proprietor D8 Conference "
	},
	{
		title: "I love and admire my species",
		date: "2 Sep 2010",
    url: "quotes/i-love-and-admire-my-species.html",
		content: "I grow little of the food I eat and of the little I do grow I did not breed or perfect the seeds I do not make any of my own clothing I speak a language I did not invent or refine I did not discover the mathematics I use I am protected by freedoms and laws I did not conceive of or legislate and do not enforce or adjudicate I am moved by music I did not create myself When I needed medical attention I was helpless to help myself survive I did not invent the transistor the microprocessor object oriented programming or most of the technology I work with I love and admire my species living and dead and am totally dependent on them for my life and well being Steve Jobs American business magnate, industrial designer, investor, and media proprietor Email from and to Steve Jobs, Dated September 2, 2010 "
	},
	{
		title: "This strange hankering for play and surprise",
		date: "2016",
    url: "quotes/this-strange-hankering-for-play-and-surprise.html",
		content: "That exploratory expansive drive is what separates delight from demand when we are in play mode we are open to new surprises while our base appetites focus the mind on the urgent needs of staying alive Understanding that distinction is critical to understanding why play despite its seemingly frivolous veneer has led to so many important discoveries and innovations The question of why the Home sapiens brain possesses this strange hankering for play and surprise is a fascinating one Steven Johnson  Wonderland: How Play Made the Modern World "
	},
	{
		title: "Crosscutting Alliances",
		date: "2018",
    url: "quotes/crosscutting-alliances.html",
		content: "Where a society s political divisions are crosscutting we line up on different sides of issues with different people at different times We may disagree with our neighbors on abortion but agree with them on health care we may dislike another neighbor s views on immigration but agree with them on the need to raise the minimum wage Such alliances help us build and sustain norms of mutual toleration When we agree with our political rivals at least some of the time we are less likely to view them as mortal enemies Steven Levitsky and Daniel Ziblatt American political scientist and Professor of Government at Harvard University How Democracies Die "
	},
	{
		title: "Unwritten Democratic Norms",
		date: "2018",
    url: "quotes/unwritten-democratic-norms.html",
		content: "Democracies work best and survive longer where constitutions are reinforced by unwritten democratic norms Two basic norms have preserved America s checks and balances in ways we have come to take for granted mutual toleration or the understanding that competing parties accept one another as legitimate rivals and forbearance or the idea that politicians should exercise restraint in deploying their institutional prerogatives These two norms undergirded American democracy for most of the twentieth century Leaders of the two major parties accepted one another as legitimate and resisted the temptation to use their temporary control of institutions to maximum partisan advantage Norms of toleration and restraint served as the soft guardrails of American democracy helping it avoid the kind of partisan fight to the death that has destroyed democracies elsewhere in the world including Europe in the 1930s and South America in the 1960s and 1970s Steven Levitsky and Daniel Ziblatt American political scientist and Professor of Government at Harvard University How Democracies Die "
	},
	{
		title: "The historical trajectory of violence",
		date: "2011",
    url: "quotes/the-historical-trajectory-of-violence.html",
		content: "The historical trajectory of violence affects not only how life is lived but how it is understood What could be more fundamental to our sense of meaning and purpose than a conception of whether the strivings of the human race over long stretches of time have left us better or worse off How in particular are we to make sense of modernity of the erosion of family tribe tradition and religion by the forces of individualism cosmopolitanism reason and science So much depends on how we understand the legacy of this transition whether we see our world as a nightmare of crime terrorism genocide and war or as a period that by the standards of history is blessed by unprecedented levels of peaceful coexistence Steven Pinker  The Better Angels of our Nature: Why Violence Has Declined "
	},
	{
		title: "The Change Dilemma",
		date: "1999",
    url: "quotes/the-change-dilemma.html",
		content: "Our dilemma is that we hate change and love it at the same time what we really want is for things to remain the same but get better Sydney Harris  unknown "
	},
	{
		title: "Learn why the world wags and what wags it",
		date: "",
    url: "quotes/learn-why-the-world-wags-and-what-wags-it.html",
		content: "You may grow old and trembling in your anatomies you may lie awake at night listening to the disorders of your veins you may miss your only love you may see the world about you devastated by evil lunatics or know your honour trampled in the sewers of baser minds There is only one thing for it then to learn Learn why the world wags and what wags it That is the only thing which the mind can never exhaust never alienate never be tortured by never fear or distrust and never dream of regretting T. H. White English author best known for his Arthurian novels The Once and Future King "
	},
	{
		title: "The Web of Life",
		date: "",
    url: "quotes/the-web-of-life.html",
		content: "Humankind has not woven the web of life We are but one thread within it Whatever we do to the web we do to ourselves All things are bound together All things connect Ted Perry  unknown "
	},
	{
		title: "Those Sharp, Scratchy, Harsh, Almost Unpleasant Guys",
		date: "",
    url: "quotes/those-sharp-scratchy-harsh-almost-unpleasant-guys.html",
		content: "I never hesitated to promote someone I didn t like The comfortable assistant the nice guy you like to go on fishing trips with is a great pitfall Instead I looked for those sharp scratchy harsh almost unpleasant guys who see and tell you about things as they really are If you can get enough of them around you and have patience enough to hear them out there is no limit to where you can go Thomas J. Watson, Jr  unknown "
	},
	{
		title: "Unintelligible Propositions",
		date: "",
    url: "quotes/unintelligible-propositions.html",
		content: "Ridicule is the only weapon which can be used against unintelligible propositions Ideas must be distinct before reason can act upon them Thomas Jefferson American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809 unknown "
	},
	{
		title: "Preach a crusade against ignorance",
		date: "1786-08-13",
    url: "quotes/preach-a-crusade-against-ignorance.html",
		content: "Preach my dear Sir a crusade against ignorance establish and improve the law for educating the common people Let our countrymen know that the people alone can protect us against these evils misery by kings nobles and priests and that the tax which will be paid for this purpose is not more than the thousandth part of what will be paid to kings priests and nobles who will rise up among us if we leave the people in ignorance Thomas Jefferson American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809 Letter to George Wythe, 13 August 1786 "
	},
	{
		title: "Institutions must advance and keep pace with the times",
		date: "1816",
    url: "quotes/institutions-must-advance-and-keep-pace-with-the-times.html",
		content: "I am certainly not an advocate for frequent and untried changes in laws and constitutions but laws and institutions must go hand in hand with the progress of the human mind As that becomes more developed more enlightened as new discoveries are made new truths disclosed and manners and opinions change with the change of circumstances institutions must advance also and keep pace with the times We might as well require a man to wear still the coat which fitted him when a boy as civilized society to remain ever under the regimen of their barbarous ancestors Thomas Jefferson American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809  "
	},
	{
		title: "Ignorant and Free",
		date: "Jan 6, 1816",
    url: "quotes/ignorant-and-free.html",
		content: "If a nation expects to be ignorant and free in a state of civilization it expects what never was and never will be The functionaries of every government have propensities to command at will the liberty and property of their constituents There is no safe deposit for these but with the people themselves nor can they be safe with them without information Where the press is free and every man able to read all is safe Thomas Jefferson American statesman, diplomat, lawyer, architect, philosopher, and Founding Father who served as the third president of the United States from 1801 to 1809 To Colonel Charles Yancey "
	},
	{
		title: "The fundamental goodness of human nature",
		date: "2004",
    url: "quotes/the-fundamental-goodness-of-human-nature.html",
		content: "The fundamental goodness of human nature like the mystery of the Trinity Grace and the Incarnation is an essential element of Christian faith This basic core of goodness is capable of unlimited development indeed becoming transformed into Christ and deified Our basic core of goodness is our true Self Its center of gravity is God The acceptance of our basic goodness is a quantum leap in the spiritual journey God and our true Self are not separate Though we are not God God and our true Self are the same thing The disintegrating and dying of our false self is our participation in the passion and death of Jesus The building of our new self based on the transforming power of divine love is our participation in His risen life Thomas Keating American Catholic monk and priest Founations for Centering Prayer and the Christian Contemplative Life "
	},
	{
		title: "A Progressive Annual Tax on Capital",
		date: "2014",
    url: "quotes/a-progressive-annual-tax-on-capital.html",
		content: "The right solution is a progressive annual tax on capital This will make it possible to avoid an endless inegalitarian spiral while preserving competition and incentives for new instances of primitive accumulation This would contain the unlimited growth of global inequality of wealth which is currently increasing at a rate that cannot be sustained in the long run and that ought to worry even the most fervent champions of the self regulated market Historical experience shows moreover that such immense inequalities of wealth have little to do with the entrepreneurial spirit and are of no use in promoting growth Nor are they of any common utility to borrow the nice expression from the 1789 Declaration of the Rights of Man and the Citizen with which I began this book Thomas Piketty  Capital in the Twenty-First Century "
	},
	{
		title: "Generosity is the robust strategy",
		date: "2017",
    url: "quotes/generosity-is-the-robust-strategy.html",
		content: "It is deeply unfortunate how difficult it is for humans to practice foresight In his wise and insightful book The Wealth of Humans senior editor for the Economist Ryan Avent traces the lessons that we could and should take from the centuries of economic and political struggle that led from the innovations of the industrial revolution to the successful economies of the second half of the twentieth century Prosperity came when the fruits of productivity were widely shared enmity political turmoil and even outright warfare were the harvest of rampant inequality It is obvious that generosity is the robust strategy Tim O'Reilly American technologist and publisher WTF: What's the Future and Why It's Up To Us "
	},
	{
		title: "Governance is essential",
		date: "2017",
    url: "quotes/governance-is-essential.html",
		content: "The simple maps of idealized markets leave out many real world details that must be dealt with in order for the market to actually function properly Governance is essential Tim O'Reilly American technologist and publisher WTF: What's the Future and Why It's Up To Us "
	},
	{
		title: "In the thrall of a vast, world-spanning machine",
		date: "2017",
    url: "quotes/in-the-thrall-of-a-vast-world-spanning-machine.html",
		content: "We are already in the thrall of a vast world spanning machine that due to errors in its foundational programming has developed a disdain for human beings is working to make them irrelevant and resists all attempts to bring it back under control It is not yet intelligent or autonomous and it still depends on its partnership with humans but it grows more powerful and more independent every day We are engaged in a battle for the soul of this machine and we are losing Tim O'Reilly American technologist and publisher WTF: What's the Future and Why It's Up To Us "
	},
	{
		title: "Worshipping the divine right of capital",
		date: "2017",
    url: "quotes/worshipping-the-divine-right-of-capital.html",
		content: "Future economic historians may look back wryly at this period when we worshipped the divine right of capital while looking down on our ancestors who believed in the divine right of kings Tim O'Reilly American technologist and publisher WTF: What's the Future and Why It's Up To Us "
	},
	{
		title: "Belief in Impossible Things",
		date: "2003",
    url: "quotes/belief-in-impossible-things.html",
		content: "There is probably no job on earth for which an ability to believe six impossible things before breakfast is more of a requirement than software project management We are routinely expected to work ourselves into a state of believing in a deadline a budget or a performance factor that time subsequently may prove to be impossible Tom DeMarco and Timothy Lister American software engineer, author, and consultant Waltzing with Bears: Managing Risk on Software Projects "
	},
	{
		title: "Freedom of Expression in Business",
		date: "1976",
    url: "quotes/freedom-of-expression-in-business.html",
		content: " note that this implicit recognition of the right side traits by the excellent companies is directly at the expense of more traditional left brain business practices causes to fight for are a long way from thirty quarterly MBO objectives The intimate team or small division ignores scale economies Allowing freedom of expression by thousands of quality circles flies in the face of the one best way of traditional production organization Tom Peters and Robert H. Waterman Jr.  In Search of Excellence: Lessons from America”s Best-Run Companies "
	},
	{
		title: "Nature must govern technology",
		date: "1976",
    url: "quotes/nature-must-govern-technology.html",
		content: "If we re ever going to get the world back on a natural footing back in tune with natural rhythyms if we re going to nurture the Earth and protect it and have fun with it and learn from it which is what mothers do with their children then we ve got to put technology an aggressive masculine system in its proper place which is that of a tool to be used sparingly joyfully gently and only in the fullest cooperation with nature Nature must govern technology not the other way around Tom Robbins American novelist Even Cowgirls Get the Blues "
	},
	{
		title: "The World is a Wonderfully Weird Place",
		date: "2007",
    url: "quotes/the-world-is-a-wonderfully-weird-place.html",
		content: "The world is a wonderfully weird place consensual reality is significantly flawed no institution can be trusted certainty is a mirage security a delusion and the tyranny of the dull mind forever threatens but our lives are not as limited as we think they are all things are possible laughter is holier than piety freedom is sweeter than fame and in the end it s love and love alone that really matters Tom Robbins American novelist Gracie Goes to Schooner School "
	},
	{
		title: "That Magical Honeycomb of Words",
		date: "2014",
    url: "quotes/that-magical-honeycomb-of-words.html",
		content: " language that magical honeycomb of words into which human reality is forever dissolving and from which it continually reemerges having invented itself anew The adjective in the lotus The jewel in the inkwell A blue dolphin leaping from a sink of dirty dishes Tom Robbins American novelist Tibetan Peach Pie: A True Account of an Imaginative Life "
	},
	{
		title: "ESPN president meets Steve Jobs",
		date: "2011",
    url: "quotes/espn-president-meets-steve-jobs.html",
		content: "The story goes that ESPN president George Bodenheimer attended the first Disney board meeting in Orlando Florida just after the company had bought Pixar the innovative animation factory and spotted Apple CEO Steve Jobs in a hallway It seemed like a good time to introduce himself I am George Bodenheimer he said to Jobs I run ESPN Jobs just looked at him and said nothing other than Your phone is the dumbest fucking idea I have ever heard then turned and walked away Tom Shales and James Andrew Miller  Those Guys Have All the Fun: Inside the World of ESPN "
	},
	{
		title: "Monkeys with money and guns",
		date: "",
    url: "quotes/monkeys-with-money-and-guns.html",
		content: "We are buried beneath the weight of information which is being confused with knowledge quantity is being confused with abundance and wealth with happiness We are monkeys with money and guns Tom Waits  unknown "
	},
	{
		title: "The Half-Finished Heaven",
		date: "1997",
    url: "quotes/the-half-finished-heaven.html",
		content: "Despondency breaks off its course Anguish breaks off its course The vulture breaks off its flight The eager light streams out even the ghosts take a draught And our paintings see daylight our red beasts of the ice age studios Everything begins to look around We walk in the sun in hundreds Each man is a half open door leading to a room for everyone The endless ground under us The water is shining among the trees The lake is a window into the earth Tomas Tranströmer  The Half-Finished Heaven "
	},
	{
		title: "Fruitful tension",
		date: "2020",
    url: "quotes/fruitful-tension.html",
		content: "The world around you is in flux You re anxious to control your destiny but yearn for the aid comforts and genuine recognition of a community You wonder at the marvels of modern science but tremble at its implications of a world without God or indeed any moral character or ideal purpose James and Dewey sought to reconcile or rather hold in fruitful tension the notions of unity and pluralism change and continuity free will and determinism science and religion self and society real and ideal and to show other people how their lives would be better if they learned to do the same Trygve Throntveit   "
	},
	{
		title: "Human life is complicated",
		date: "",
    url: "quotes/human-life-is-complicated.html",
		content: "What s good about an individual human life can t be boiled down to any single value It s not all about beauty or all about justice or all about happiness Pluralist theories are more plausible postulating a variety of relevant values including human well being justice fairness beauty the artistic peaks of human achievement the quality of mercy and the many different and indeed sometimes contrasting kinds of happiness Life is complicated Tyler Cowen American economist, columnist and blogger  "
	},
	{
		title: "When his salary depends on his not understanding it",
		date: "1935",
    url: "quotes/when-his-salary-depends-on-his-not-understanding-it.html",
		content: "It is difficult to get a man to understand something when his salary depends on his not understanding it Upton Sinclair American writer I, Candidate for Governor: And How I Got Licked "
	},
	{
		title: "Imagination is not a means of making money",
		date: "2016",
    url: "quotes/imagination-is-not-a-means-of-making-money.html",
		content: "In America the imagination is generally looked on as something that might be useful when the TV is out of order Poetry and plays have no relation to practical politics Novels are for students housewives and other people who don t work Fantasy is for children and primitive peoples Literacy is so you can read the operating instructions I think the imagination is the single most useful tool mankind possesses It beats the opposable thumb I can imagine living without my thumbs but not without my imagination I hear voices agreeing with me Yes yes they cry The creative imagination is a tremendous plus in business We value creativity we reward it In the marketplace the word creativity has come to mean the generation of ideas applicable to practical strategies to make larger profits This reduction has gone on so long that the word creative can hardly be degraded further I don t use it any more yielding it to capitalists and academics to abuse as they like But they can t have imagination Imagination is not a means of making money It has no place in the vocabulary of profit making It is not a weapon though all weapons originate from it and their use or non use depends on it as with all tools and their uses The imagination is an essential tool of the mind a fundamental way of thinking an indispensable means of becoming and remaining human Ursula K. Le Guin  Words Are My Matter "
	},
	{
		title: "To choose one's attitude",
		date: "",
    url: "quotes/to-choose-ones-attitude.html",
		content: "Everything can be taken from a man but one thing the last of the human freedoms to choose one s attitude in any given set of circumstances to choose one s own way Victor Frankl Austrian Holocaust survivor, neurologist, psychiatrist and author  "
	},
	{
		title: "Each man is questioned by life",
		date: "1946",
    url: "quotes/each-man-is-questioned-by-life.html",
		content: "Ultimately man should not ask what the meaning of his life is but rather must recognize that it is he who is asked In a word each man is questioned by life and he can only answer to life by answering for his own life to life he can only respond by being responsible Victor Frankl Austrian Holocaust survivor, neurologist, psychiatrist and author Man's Search for Meaning "
	},
	{
		title: "Love is the ultimate and the highest goal",
		date: "1946",
    url: "quotes/love-is-the-ultimate-and-the-highest-goal.html",
		content: "A thought transfixed me for the first time in my life I saw the truth as it is set into song by so many poets proclaimed as the final wisdom by so many thinkers The truth that love is the ultimate and the highest goal to which man can aspire Then I grasped the meaning of the greatest secret that human poetry and human thought and belief have to impart The salvation of man is through love and in love Victor Frankl Austrian Holocaust survivor, neurologist, psychiatrist and author Man's Search for Meaning "
	},
	{
		title: "Culture can be either mutualistic or predatory",
		date: "06 Aug 2020",
    url: "quotes/culture-can-be-either-mutualistic-or-predatory.html",
		content: "Culture can be either mutualistic or predatory that s our choice as a society We can choose to create societies that prioritize what we consider good Victor Hwang Tech CEO and author Evolution, Complexity, and the Third Way of Entrepreneurship: A Capstone Conversation with Victor Hwang "
	},
	{
		title: "We have the capacity to envision a better future and make it a reality",
		date: "2020-08-06",
    url: "quotes/we-have-the-capacity-to-envision-a-better-future-and-make-it-a-reality.html",
		content: "Many people interpret the invisible hand concept as saying we should just take our hands off the steering wheel like there s nothing we should do I don t agree with that Humans aren t designed to accept the world as is so to just say whatever is denying what makes us thrive as a species More than any other creature on Earth we have the capacity to envision a better future and make it a reality We are askers of the question What kind of world do we want And perhaps even more importantly we can ask the follow up question How do we build that Victor Hwang Tech CEO and author Evolution, Complexity, and the Third Way of Entrepreneurship: A Capstone Conversation with Victor Hwang "
	},
	{
		title: "Confusion leads to understanding",
		date: "12 Sep 2018",
    url: "quotes/confusion-leads-to-understanding.html",
		content: "I m trying to confuse peoples initial perceptions Confusion leads to exploration exploration to learning and learning to understanding Vishavjit Singh Sikh Captain America A Shield as a Weapon Against Intolerance "
	},
	{
		title: "The only sensible procedure for a critic",
		date: "1973",
    url: "quotes/the-only-sensible-procedure-for-a-critic.html",
		content: "The only sensible procedure for a critic is to keep silent about works which he believes to be bad while at the same time vigorously campaigning for those which he believes to be good especially if they are being neglected or underestimated by the public W. H. Auden An Anglo-American poet and critic The Dyer's Hand and Other Essays "
	},
	{
		title: "Dying is a very dull, dreary affair",
		date: "1978",
    url: "quotes/dying-is-a-very-dull-dreary-affair.html",
		content: "Dying is a very dull dreary affair And my advice to you is to have nothing whatever to do with it W. Somerset Maugham English writer, known for his plays, novels and short stories Conversations with Willie "
	},
	{
		title: "The American cult of the individual",
		date: "06 Aug 2020",
    url: "quotes/the-american-cult-of-the-individual.html",
		content: "The American cult of the individual denies not just community but the very idea of society No one owes anything to anyone All must be prepared to fight for everything education shelter food medical care Wade Davis Canadian cultural anthropologist, ethnobotanist, author, and photographer Rolling Stone "
	},
	{
		title: "Change is the one constant when it comes to culture",
		date: "6 Aug 2020",
    url: "quotes/change-is-the-one-constant-when-it-comes-to-culture.html",
		content: "Change after all is the one constant when it comes to culture All peoples in all places at all times are always dancing with new possibilities for life Wade Davis Canadian cultural anthropologist, ethnobotanist, author, and photographer The Unraveling of America "
	},
	{
		title: "We make money to make more movies",
		date: "",
    url: "quotes/we-make-money-to-make-more-movies.html",
		content: "We don t make movies to make money we make money to make more movies Walt Disney American entrepreneur, animator, writer, voice actor, and film producer  "
	},
	{
		title: "The Loftiest and Purest Art",
		date: "",
    url: "quotes/the-loftiest-and-purest-art.html",
		content: "Talk not so much then young artist of the great old masters who but painted and chisell d Study not only their productions There is a still higher school for him who would kindle his fire with coal from the altar of the loftiest and purest art It is the school of all grand actions and grand virtues of heroism of the death of patriots and martyrs of all the mighty deeds written in the pages of history deeds of daring and enthusiasm devotion and fortitude Walt Whitman  unknown "
	},
	{
		title: "The divine literatus",
		date: "1871",
    url: "quotes/the-divine-literatus.html",
		content: "View d to day from a point of view sufficiently over arching the problem of humanity all over the civilized world is social and religious and is to be finally met and treated by literature The priest departs the divine literatus comes Never was anything more wanted than to day and here in the States the poet of the modern is wanted or the great literatus of the modern Walt Whitman  Democratic Vistas "
	},
	{
		title: "Set off from the rest by a line drawn",
		date: "1871",
    url: "quotes/set-off-from-the-rest-by-a-line-drawn.html",
		content: "Of all dangers to a nation as things exist in our day there can be no greater one than having certain portions of the people set off from the rest by a line drawn they not privileged as others but degraded humiliated made of no account Walt Whitman  Democratic Vistas "
	},
	{
		title: "This faith in consciousness",
		date: "2016",
    url: "quotes/this-faith-in-consciousness.html",
		content: "We are ambivalent combative stubborn wildly changeable beings that have the natural schizophrenic facility to love and hate at the same time We respond with Pavlovian predictability to invisible forces such as the economic infrastructure ever changing technology and unconscious instincts all the while believing that we are fully conscious beings making decisions based on logic arisen from observations informed by eternal truths This faith in consciousness is in the mildest language possible misplaced Walter Mosley  Folding the Red Into the Black: Developing a Viable Untopia for Human Survival in the 21st Century "
	},
	{
		title: "Thralls to group instincts",
		date: "2016",
    url: "quotes/thralls-to-group-instincts.html",
		content: "Maybe bees and ants don t mind being thralls to group instincts but people I feel do And so the question that human beings must ask is How do I live my own life and survive even prosper while sharing the load of the greater culture Walter Mosley  Folding the Red Into the Black: Developing a Viable Untopia for Human Survival in the 21st Century "
	},
	{
		title: "A world that is tolerable",
		date: "2016",
    url: "quotes/a-world-that-is-tolerable.html",
		content: "We have to stop and pull back look at ourselves and each other and wonder if there is a way that each and every one of us or at least the vast majority of us can agree on the elements that make a world that is tolerable a world with enough food and warmth and pleasant distractions a world where love and belief are okay even primary Walter Mosley  Folding the Red Into the Black: Developing a Viable Untopia for Human Survival in the 21st Century "
	},
	{
		title: "Walter Reuther and the Ford Robots",
		date: "1968",
    url: "quotes/walter-reuther-and-the-ford-robots.html",
		content: "Walter Reuther the pioneer UAW organizer told the story of a conversation with a Ford executive who was showing Reuther his new factory robots How are you going to collect union dues from all these machines he asked Reuther said he replied You know that is not what s bothering me I m troubled by the problem of how to sell automobiles to them Walter Reuther American leader of organized labor and civil rights activist WTF: What's the Future and Why It's Up To Us "
	},
	{
		title: "It's the rich class that's winning",
		date: "Nov 26, 2006",
    url: "quotes/its-the-rich-class-thats-winning.html",
		content: "There s class warfare all right but it s my class the rich class that s making war and we re winning Warren Buffett  New York Times "
	},
	{
		title: "Art, Science and Empire",
		date: "",
    url: "quotes/art-science-and-empire.html",
		content: "The foundation of empire is art and science Remove them or degrade them and the empire is no more Empire follows art and not vice versa as Englishmen suppose William Blake  unknown "
	},
	{
		title: "Expectations of holiness",
		date: "",
    url: "quotes/expectations-of-holiness.html",
		content: "It is not because angels are holier than men or devils that makes them angels but because they do not expect holiness from one another but from God only William Blake  unknown "
	},
	{
		title: "Minute Particulars",
		date: "",
    url: "quotes/minute-particulars.html",
		content: "He who would do good to another must do it in Minute Particulars general Good is the plea of the scoundrel hypocrite and flatterer for Art and Science cannot exist but in minutely organized Particulars William Blake  unknown "
	},
	{
		title: "To see a world in a grain of sand",
		date: "",
    url: "quotes/to-see-a-world-in-a-grain-of-sand.html",
		content: "To see a world in a grain of sand And heaven in a wild flower Hold infinity in the palm of your hand And eternity in an hour William Blake  The Portable William Blake "
	},
	{
		title: "More than enough",
		date: "1793",
    url: "quotes/more-than-enough.html",
		content: "You never know what is enough unless you know what is more than enough William Blake  The Marriage of Heaven and Hell "
	},
	{
		title: "Nirvana Antipattern",
		date: "1999",
    url: "quotes/nirvana-antipattern.html",
		content: "The typical and primary root cause of the Nirvana AntiPattern is the misguided notion that conflict is bad and therefore should be avoided at all costs In reality conflict in the form of tension is a necessary part of any difficult task that involves intelligent people who care about their work William J. Brown, Hays W. McCormick III and Scott W. Thomas  AntiPatterns and Patterns in Software Configuration Management "
	},
	{
		title: "Two ideas of government",
		date: "1896",
    url: "quotes/two-ideas-of-government.html",
		content: "There are two ideas of government There are those who believe that you just legislate to make the well to do prosperous that their prosperity will leak through on those below The Democratic idea has been that if you legislate to make the masses prosperous their prosperity will find its way up and through every class that rests upon it William Jennings Bryan  Democratic National Convention "
	},
	{
		title: "When racial or religious lines are drawn by the State",
		date: "1964",
    url: "quotes/when-racial-or-religious-lines-are-drawn-by-the-state.html",
		content: "When racial or religious lines are drawn by the State the multi racial multi religious communities that our Constitution seeks to weld together as one become separatist antagonisms that relate to race or to religion rather than to political issues are generated communities seek not the best representative but the best racial or religious partisan William O. Douglas US Supreme Court Justice Wright v. Rockefeller "
	},
	{
		title: "Democracy is Worst Form of Government",
		date: "",
    url: "quotes/democracy-is-worst-form-of-government.html",
		content: "Democracy is the worst form of government except for all those others that have been tried Winston Churchill British statesman, army officer and writer unknown "
	},
	{
		title: "Liberalism is not Socialism",
		date: "",
    url: "quotes/liberalism-is-not-socialism.html",
		content: "Liberalism is not Socialism and never will be There is a great gulf fixed It is not a gulf of method it is a gulf of principle Socialism seeks to pull down wealth Liberalism seeks to raise up poverty Socialism would destroy private interests Liberalism would preserve private interests in the only way in which they can be safely and justly preserved namely by reconciling them with public right Socialism would kill enterprise Liberalism would rescue enterprise from the trammels of privilege and preference Socialism exalts the rule Liberalism exalts the man Socialism attacks capital Liberalism attacks monopoly Winston Churchill British statesman, army officer and writer unknown "
	},
	{
		title: "We are Doing our Best",
		date: "",
    url: "quotes/we-are-doing-our-best.html",
		content: "It s no use saying We are doing our best You have got to succeed in doing what is necessary Winston Churchill British statesman, army officer and writer unknown "
	},
	{
		title: "Notation not to be confused with music itself",
		date: "1938",
    url: "quotes/notation-not-to-be-confused-with-music-itself.html",
		content: "Essentially then notation is a convention by which the general proportions of a composition may be roughly described It is not to be confused with music itself It is merely the blue print from which music may be constructed It has its advantages as an expedient for the preservation of the structural ideas of composers and as an aid in the manipulation of musical proportions but music itself remains a transient experience of ephemeral designs in values of time a process of change in which each element passes from the future into the past dying at the instant of its birth tangible only as a momentary oscillation of air particles If I seem to digress here into the general field of musical aesthetics it is only because these discrepancies are so often ignored by writers on music as to constitute a continual source of muddlement Winthrop Sargeant American music critic, violinist, and writer Jazz: Hot and Hybrid "
	},
	{
		title: "Balance is Required to Maintain Democracy",
		date: "2008",
    url: "quotes/balance-is-required-to-maintain-democracy.html",
		content: "Our current lack of respect for the swing can be likened to the current state of our democracy Balance is required to maintain something as delicate as democracy a subtle understanding of how your power can be magnified through joining with and sharing the power of another person When that is no longer understood it becomes a battle to see who is the strongest who is the loudest who can get the most attention Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "The Challenge of Swing",
		date: "2008",
    url: "quotes/the-challenge-of-swing.html",
		content: "Swing the dance and the music bespeaks the flexible nature of American life In jazz the bass walks a note on every beat The drummer rides the cymbal or plays brushes on every beat And everybody else invents melodies and sounds that sway with against and upside every beat Every beat requires musicians to reassess their relationships to one another This is what makes swinging so challenging You are forced to be constantly aware of other people s feelings Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "Inextricably Linked in Freedom",
		date: "2008",
    url: "quotes/inextricably-linked-in-freedom.html",
		content: "The originators of jazz were only two generations removed from slavery They were victims of rigorous forms of segregation that routinely and institutionally denied their humanity So freedom was much more than a word to them These pioneering musicians were exuberant about exhibiting this newfound personal freedom through their art But they were also excited about hearing other people do the same thing They understood that all were inextricably linked in freedom just as they had been inextricably linked in bondage And it wasn t theory it was life as they lived it Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "Integrity and Conviction",
		date: "2008",
    url: "quotes/integrity-and-conviction.html",
		content: "The best jazz had always been the embodiment of integrity and conviction Because the musicians skills and competence were so hard earned it was difficult to get them to compromise Once jazzmen began making the decision to water down their artistry for notoriety publicity or money our art began to face the same challenges that our government and many businesses face dearth of leadership lack of quality loss of meaning insensitivity to people ultimately a wholesale loss of faith Well what is jazz anyway What difference does it make what I play Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "The Love of What We are Doing",
		date: "2008",
    url: "quotes/the-love-of-what-we-are-doing.html",
		content: "It s a labor of love for all of us It s not contrived or fake and it s not about money it s too much work to be about money It s about the love of what we are doing That s the center of what it is about and that s the center of what anything of great human value is always about It s about that love that you have for humanity in our commonality And to experience all of the things that are in this music like heartbreak and joy and many other things a certain type of striving and struggle it s a part of the life we all live together Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "The Philosophy of Jazz",
		date: "2008",
    url: "quotes/the-philosophy-of-jazz.html",
		content: "Jazz is the most flexible art form ever because it believes in the good taste of individuals It believes in our ability to make reasonable choices It takes a chance on our decision making skills instead of legislating our freedom away with written restrictions and restrictive hierarchies In jazz the size of your heart and your ability to play determine your position in the band The philosophy of jazz is rooted in the elevation and enrichment of people plain ol folks Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "The Power of Art",
		date: "2008",
    url: "quotes/the-power-of-art.html",
		content: "When I started learning about jazz I wasn t into any kind of art I had no idea it could have a practical purpose Now more than thirty years later I testify to the power of art and more specifically jazz to improve your life and keep on improving it Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "The Undisputed Sovereignty of the Human Being",
		date: "2008",
    url: "quotes/the-undisputed-sovereignty-of-the-human-being.html",
		content: "Jazz insists on the undisputed sovereignty of the human being In this technological era we can easily be fooled into believing that sophisticated machines are more important than progressive humanity That s why art is an important barometer of identity The arts let us know who we are in all of our glory reveal the best of who we are All the political and financial might in the world is diminished when put to the service of an impoverished cultural agenda We see it in our schools in our homes and in our world profile rich and fat lazy and morally corrupt with wild out of control young people We all know that civilization requires a supreme effort Our technology will become outmoded but the technology of the human soul does not change Wynton Marsalis American trumpeter, composer and teacher Moving to Higher Ground: How Jazz Can Change Your Life "
	},
	{
		title: "Capitalism as a Market Society",
		date: "08 May 2018",
    url: "quotes/capitalism-as-a-market-society.html",
		content: "Readers may be surprised by the absence of any mention of capital or capitalism in the book I chose to leave out such words not because there is anything wrong with them but because loaded as they are with heavy baggage they get in the way of illuminating the essence of things So instead of speaking about capitalism I use the term market society Instead of capital you will find more normal words like machinery and produced means of production Why use jargon if we can avoid it Yanis Varoufakis Greek economist, academic, philosopher and politician Talking to My Daughter About the Economy: or, How Capitalism Works -- and How It Fails "
	},
	{
		title: "The economy is too important to leave to the economists",
		date: "08 May 2018",
    url: "quotes/the-economy-is-too-important-to-leave-to-the-economists.html",
		content: "This book grew out of my Greek publisher s invitation back in 2013 to talk directly to young people about the economy My reason for writing it was the conviction that the economy is too important to leave to the economists Yanis Varoufakis Greek economist, academic, philosopher and politician Talking to My Daughter About the Economy: or, How Capitalism Works -- and How It Fails "
	},
	{
		title: "The Opposite of Popularizing Economics",
		date: "May 8, 2018",
    url: "quotes/the-opposite-of-popularizing-economics.html",
		content: "This is why this book is my attempt to do the opposite of popularizing economics if it succeeds it should incite its readers to take the economy into their own hands and make them realize that to understand the economy they also have to understand why the self appointed experts on the economy the economists are almost always wrong Ensuring that everyone is allowed to talk authoritatively about the economy is a prerequisite for a good society and a precondition for an authentic democracy The economy s ups and downs determine our lives its forces make a mockery of our democracies its tentacles reach deep into our souls where they shape our hopes and aspirations If we defer to the experts on the economy we effectively hand them all decisions that matter Yanis Varoufakis Greek economist, academic, philosopher and politician Talking to My Daughter About the Economy: or, How Capitalism Works -- and How It Fails "
	},
	{
		title: "Seeking ways to disagree with myself",
		date: "2018-05-08",
    url: "quotes/seeking-ways-to-disagree-with-myself.html",
		content: "It has allowed me to return to a long lost self who once wrote in peace and quiet doing what I have always loved finding ways to disagree with myself in order to discover what my true thoughts are Yanis Varoufakis Greek economist, academic, philosopher and politician Talking to My Daughter About the Economy: or, How Capitalism Works -- and How It Fails "
	},
	{
		title: "Authentic cultures",
		date: "2015",
    url: "quotes/authentic-cultures.html",
		content: "We still talk a lot about authentic cultures but if by authentic we mean something that developed independently and that consists of ancient local traditions free of external influences then there are no authentic cultures left on earth Over the last few centuries all cultures were changed almost beyond recognition by a flood of global influences Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "The Awesome Power of Culture",
		date: "2015",
    url: "quotes/the-awesome-power-of-culture.html",
		content: "Millions of years of evolution have designed us to live and think as community members Within a mere two centuries we have become alienated individuals Nothing testifies better to the awesome power of culture Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "A Completely Free Market",
		date: "2015",
    url: "quotes/a-completely-free-market.html",
		content: "In a completely free market unsupervised by kings and priests avaricious capitalists can establish monopolies or collude against their workforces If there is a single corporation controlling all shoe factories in a country or if all factory owners conspire to reduce wages simultaneously then the labourers are no longer able to protect themselves by switching jobs Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Consistency is the playground of dull minds",
		date: "2015",
    url: "quotes/consistency-is-the-playground-of-dull-minds.html",
		content: "Just as medieval culture did not manage to square chivalry with Christianity so the modern world fails to square liberty with equality But this is no defect Such contradictions are an inseparable part of every human culture In fact they are culture s engines responsible for the creativity and dynamism of our species Just as when two clashing musical notes played together force a piece of music forward so discord in our thoughts ideas and values compel us to think re evaluate and criticise Consistency is the playground of dull minds Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Cultures as a kind of mental infection",
		date: "2015",
    url: "quotes/cultures-as-a-kind-of-mental-infection.html",
		content: "Ever more scholars see cultures as a kind of mental infection or parasite with humans as its unwitting host Organic parasites such as viruses live inside the body of their hosts They multiply and spread from one host to the other feeding off their hosts weakening them and sometimes even killing them As long as the hosts live long enough to pass along the parasite it cares little about the condition of its host In just this fashion cultural ideas live inside the minds of humans They multiply and spread from one host to another occasionally weakening the hosts and sometimes even killing them A cultural idea such as belief in Christian heaven above the clouds or Communist paradise here on earth can compel a human to dedicate his or her life to spreading that idea even at the price of death The human dies but the idea spreads According to this approach cultures are not conspiracies concocted by some people in order to take advantage of others as Marxists tend to think Rather cultures are mental parasites that emerge accidentally and thereafter take advantage of all people infected by them Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Evolutionary success and individual suffering",
		date: "2015",
    url: "quotes/evolutionary-success-and-individual-suffering.html",
		content: "This discrepancy between evolutionary success and individual suffering is perhaps the most important lesson we can draw from the Agricultural Revolution When we study the narrative of plants such as wheat and maize maybe the purely evolutionary perspective makes sense Yet in the case of animals such as cattle sheep and Sapiens each with a complex world of sensations and emotions we have to consider how evolutionary success translates into individual experience In the following chapters we will see time and again how a dramatic increase in the collective power and ostensible success of our species went hand in hand with much individual suffering Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "From a biological perspective, nothing is unnatural",
		date: "2015",
    url: "quotes/from-a-biological-perspective-nothing-is-unnatural.html",
		content: "Culture tends to argue that it forbids only that which is unnatural But from a biological perspective nothing is unnatural Whatever is possible is by definition also natural A truly unnatural behaviour one that goes against the laws of nature simply cannot exist so it would need no prohibition No culture has ever bothered to forbid men to photosynthesise women to run faster than the speed of light or negatively charged electrons to be attracted to each other In truth our concepts natural and unnatural are taken not from biology but from Christian theology The theological meaning of natural is in accordance with the intentions of the God who created nature Christian theologians argued that God created the human body intending each limb and organ to serve a particular purpose If we use our limbs and organs for the purpose envisioned by God then it is a natural activity To use them differently than God intends is unnatural But evolution has no purpose Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "History is something very few people have been doing",
		date: "2015",
    url: "quotes/history-is-something-very-few-people-have-been-doing.html",
		content: "These forfeited food surpluses fuelled politics wars art and philosophy They built palaces forts monuments and temples Until the late modern era more than 90 per cent of humans were peasants who rose each morning to till the land by the sweat of their brows The extra they produced fed the tiny minority of elites kings government officials soldiers priests artists and thinkers who fill the history books History is something that very few people have been doing while everyone else was ploughing fields and carrying water buckets Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Human imagination more than biological reality",
		date: "2015",
    url: "quotes/human-imagination-more-than-biological-reality.html",
		content: "There is little sense then in arguing that the natural function of women is to give birth or that homosexuality is unnatural Most of the laws norms rights and obligations that define manhood and womanhood reflect human imagination more than biological reality Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Luxuries tend to become necessities",
		date: "2015",
    url: "quotes/luxuries-tend-to-become-necessities.html",
		content: "One of history s few iron laws is that luxuries tend to become necessities and to spawn new obligations Once people get used to a certain luxury they take it for granted Then they begin to count on it Finally they reach a point where they can t live without it Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "A Meaningful Life",
		date: "2015",
    url: "quotes/a-meaningful-life.html",
		content: "As Nietzsche put it if you have a why to live you can bear almost any how A meaningful life can be extremely satisfying even in the midst of hardship whereas a meaningless life is a terrible ordeal no matter how comfortable it is Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Most sociopolitical hierarchies lack a logical or biological basis",
		date: "2015",
    url: "quotes/most-sociopolitical-hierarchies-lack-a-logical-or-biological-basis.html",
		content: "Most sociopolitical hierarchies lack a logical or biological basis they are nothing but the perpetuation of chance events supported by myths Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Myths are stronger than anyone could have imagined",
		date: "2015",
    url: "quotes/myths-are-stronger-than-anyone-could-have-imagined.html",
		content: "Myths it transpired are stronger than anyone could have imagined When the Agricultural Revolution opened opportunities for the creation of crowded cities and mighty empires people invented stories about great gods motherlands and joint stock companies to provide the needed social links While human evolution was crawling at its usual snail s pace the human imagination was building astounding networks of mass cooperation unlike any other ever seen on earth Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "No single natural way of life for Sapiens",
		date: "2015",
    url: "quotes/no-single-natural-way-of-life-for-sapiens.html",
		content: "The Heated debates about <em>Homo sapiens< em> natural way of life miss the main point Ever since the Cognitive Revolution there hasn t been a single natural way of life for Sapiens There are only cultural choices from among a bewildering palette of possibilities Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Our Social Order Now in a State of Permanent Flux",
		date: "2015",
    url: "quotes/our-social-order-now-in-a-state-of-permanent-flux.html",
		content: "Over the last two centuries the pace of change became so quick that the social order acquired a dynamic and malleable nature It now exists in a state of permanent flux Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "These principles have no objective validity",
		date: "2015",
    url: "quotes/these-principles-have-no-objective-validity.html",
		content: "The two texts present us with an obvious dilemma Both the Code of Hammurabi and the American Declaration of Independence claim to outline universal and eternal principles of justice but according to the Americans all people are equal whereas according to the Babylonians people are decidedly unequal The Americans would of course say that they are right and that Hammurabi is wrong Hammurabi naturally would retort that he is right and that the Americans are wrong In fact they are both Wrong Hammurabi and the American Founding Fathers alike imagined a reality governed by universal and immutable principles of justice such as equality or hierarchy Yet the only place where such universal principles exist is in the fertile imagination of Sapiens and in the myths they invent and tell one another These principles have no objective validity Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Trust in the Future",
		date: "2015",
    url: "quotes/trust-in-the-future.html",
		content: "But in its extreme form belief in the free market is as naïve as belief in Santa Claus There simply is no such thing as a market free of all political bias The most important economic resource is trust in the future and this resource is constantly threatened by thieves and charlatans Markets by themselves offer no protection against fraud theft and violence It is the job of political systems to ensure trust by legislating sanctions against cheats and to establish and support police forces courts and jails which will enforce the law When kings fail to do their jobs and regulate the markets properly it leads to loss of trust dwindling credit and economic depression Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Unprecedented growth in human power",
		date: "2015",
    url: "quotes/unprecedented-growth-in-human-power.html",
		content: "The last 500 years have witnessed a phenomenal and unprecedented growth in human power In the year 1500 there were about 500 million Homo sapiens in the entire world Today there are 7 billion The total value of goods and services produced by humankind in the year 1500 is estimated at $250 billion in today s dollars Nowadays the value of a year of human production is close to $60 trillion In 1500 humanity consumed about 13 trillion calories of energy per day Today we consume 1 500 trillion calories a day Take a second look at those figures human population has increased fourteen fold production 240 fold and energy consumption 115 fold Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "When Growth Becomes a Supreme Good",
		date: "2015",
    url: "quotes/when-growth-becomes-a-supreme-good.html",
		content: "This is the fly in the ointment of free market capitalism It cannot ensure that profits are gained in a fair way or distributed in a fair manner On the contrary the craving to increase profits and production blinds people to anything that might stand in the way When growth becomes a supreme good unrestricted by any other ethical considerations it can easily lead to catastrophe Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "Why study history?",
		date: "2015",
    url: "quotes/why-study-history.html",
		content: "So why study history Unlike physics or economics history is not a means for making accurate predictions We study history not to know the future but to widen our horizons to understand that our present situation is neither natural nor inevitable and that we consequently have many more possibilities before us than we imagine Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "The World Empire enforces World Peace",
		date: "2015",
    url: "quotes/the-world-empire-enforces-world-peace.html",
		content: "Most countries no longer engage in full scale war for the simple reason that they are no longer independent Though citizens in Israel Italy Mexico or Thailand may harbour illusions of independence the fact is that their governments cannot conduct independent economic or foreign policies and they are certainly incapable of initiating and conducting full scale war on their own As explained in Chapter 11 we are witnessing the formation of a global empire Like previous empires this one too enforces peace within its borders And since its borders cover the entire globe the World Empire effectively enforces world peace Yuval Noah Harari Israeli public intellectual, historian and professor Sapiens: A Brief History of Humankind "
	},
	{
		title: "The brightest goat in the herd",
		date: "2017",
    url: "quotes/the-brightest-goat-in-the-herd.html",
		content: "As any farmer knows it s usually the brightest goat in the herd that stirs up the most trouble which is why the Agricultural Revolution involved downgrading animals mental abilities The second cognitive revolution dreamed up by techno humanists might do the same to us producing human cogs who communicate and process data far more effectively than ever before but who can barely pay attention dream or doubt Yuval Noah Harari Israeli public intellectual, historian and professor Homo Deus: A Brief History of Tomorrow "
	},
	{
		title: "Fear of Missing Out",
		date: "2017",
    url: "quotes/fear-of-missing-out.html",
		content: "Modern humanity is sick with FOMO Fear of Missing Out and though we have more choice than ever before we have lost the ability to really pay attention to whatever we choose Yuval Noah Harari Israeli public intellectual, historian and professor Homo Deus: A Brief History of Tomorrow "
	},
	{
		title: "Flexible cooperation with strangers",
		date: "2017",
    url: "quotes/flexible-cooperation-with-strangers.html",
		content: "To the best of our knowledge only Sapiens can cooperate in very flexible ways with countless numbers of strangers This concrete capability rather than an eternal soul or some unique kind of consciousness explains our mastery of planet Earth Yuval Noah Harari Israeli public intellectual, historian and professor Homo Deus: A Brief History of Tomorrow "
	},
	{
		title: "The system has been shaping and reshaping our minds",
		date: "2017",
    url: "quotes/the-system-has-been-shaping-and-reshaping-our-minds.html",
		content: "For thousands of years the system has been shaping and reshaping our minds according to its needs Sapiens originally evolved as members of small intimate communities and their mental faculties were not adapted to living as cogs within a giant machine However with the rise of cities kingdoms and empires the system cultivated capacities required for large scale cooperation while disregarding other skills and aptitudes Yuval Noah Harari Israeli public intellectual, historian and professor Homo Deus: A Brief History of Tomorrow "
	},
	{
		title: "Economic growth will not save the global ecosystem",
		date: "2018",
    url: "quotes/economic-growth-will-not-save-the-global-ecosystem.html",
		content: "Liberalism traditionally relied on economic growth to magically solve difficult social and political conflicts Liberalism reconciled the proletariat with the bourgeoisie the faithful with atheists natives with immigrants and Europeans with Asians by promising everybody a larger slice of the pie With a constantly growing pie that was possible However economic growth will not save the global ecosystem just the opposite in fact for economic growth is the cause of the ecological crisis And economic growth will not solve technological disruption for it is predicated on the invention of more and more disruptive technologies Yuval Noah Harari Israeli public intellectual, historian and professor 21 Lessons for the 21st Century "
	},
	{
		title: "If the future of humanity is decided in your absence",
		date: "2018",
    url: "quotes/if-the-future-of-humanity-is-decided-in-your-absence.html",
		content: "In a world deluged by irrelevant information clarity is power In theory anybody can join the debate about the future of humanity but it is so hard to maintain a clear vision We might not even notice that a debate is going on or what the key questions are Most of us can t afford the luxury of investigating because we have more pressing things to do we have to go to work take care of the kids or look after elderly parents Unfortunately history does not give discounts If the future of humanity is decided in your absence because you are too busy feeding and clothing your kids you and they will not be exempt from the consequences This is unfair but who said history was fair Yuval Noah Harari Israeli public intellectual, historian and professor 21 Lessons for the 21st Century "
	},
	{
		title: "People are happy to give away their most valuable asset",
		date: "2018",
    url: "quotes/people-are-happy-to-give-away-their-most-valuable-asset.html",
		content: "At present people are happy to give away their most valuable asset their personal data in exchange for free email services and funny cat videos It s a bit like African and Native American tribes who unwittingly sold entire countries to European imperialists in exchange for colorful beads and cheap trinkets Yuval Noah Harari Israeli public intellectual, historian and professor 21 Lessons for the 21st Century "
	},
	{
		title: "Regulating the ownership of data",
		date: "2018",
    url: "quotes/regulating-the-ownership-of-data.html",
		content: "So we had better call upon our lawyers politicians philosophers and even poets to turn their attention to this conundrum how do you regulate the ownership of data This may well be the most important political question of our era If we cannot answer this question soon our sociopolitical system might collapse Yuval Noah Harari Israeli public intellectual, historian and professor 21 Lessons for the 21st Century "
	},
	{
		title: "Struggling against irrelevance",
		date: "2018",
    url: "quotes/struggling-against-irrelevance.html",
		content: "Brexit and the rise of Trump might therefore demonstrate a trajectory opposite to that of traditional socialist revolutions The Russian Chinese and Cuban revolutions were made by people who were vital to the economy but who lacked political power in 2016 Trump and Brexit were supported by many people who still enjoyed political power but who feared they were losing their economic worth Perhaps in the twenty first century populist revolts will be staged not against an economic elite that exploits people but against an economic elite that does not need them anymore This may well be a losing battle It is much harder to struggle against irrelevance than against exploitation Yuval Noah Harari Israeli public intellectual, historian and professor 21 Lessons for the 21st Century "
	},
];
