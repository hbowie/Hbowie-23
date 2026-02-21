<?nextrec?>
<?output "../../news/=$title&f$=.md"?>
# =$news-title$=

=$news-intro$=

----

<?if "=$class$=" eq "song" ?>
## "=$title&^tm$="
				
A song written by =$songwriters$= in =$date-of-song$=
				
Listening Options:

+ [Apple Music](=$apple-music-link$=)
<?if "=$youtube-link$=" ?>
+ [YouTube](=$youtube-link$=)
<?endif?>
<?if "=$spotify-link$=" ?>
+ [Spotify](=$spotify-link$=)
<?endif?>
<?endif?>

<?if "=$image-name$=" ?>
![=$image-alt$=](https://hbowie.net/images/=$title&^tf$=-=$image-name&f$=.jpg)
<?endif?>

=$body$=

<?if "=$komments-link$=" ?>
----

If you'd like to comment on this post, or see what others might have said about it, then [click here](=$komments-link$=). 

<?endif?>
<?if "=$news-outro$=" ?>
----

=$news-outro$=
<?endif?>
<?loop?>
