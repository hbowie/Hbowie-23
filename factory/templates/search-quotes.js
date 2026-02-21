<?output "../../web/js/search-quotes.js"?>
let searchQuotes = [
<?nextrec?>
	{
		title: "=$title&^t$=",
		date: "=$date$=",
    url: "quotes/=$title&^tf$=.html",
		content: "=$body&p$= =$author$= =$authorinfo$= =$worktitle$= "
	},
<?loop?>
];
