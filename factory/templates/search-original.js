<?output "../../web/js/search-original.js"?>
let searchOriginal = [
<?nextrec?>
	{
		title: "=$title&p$=",
		date: "=$date&dd MMM yyyy$=",
    url: "writings/=$title&f$=.html",
		content: "=$body&p$="
	},
<?loop?>
];
