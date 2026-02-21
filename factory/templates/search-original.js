<?output "../../web/js/search-original.js"?>
let searchOriginal = [
<?nextrec?>
	{
		title: "=$title&^tpp$=",
		date: "=$date&dd MMM yyyy$=",
    url: "writings/=$title&^tf$=.html",
		content: "=$body&p$="
	},
<?loop?>
];
