const isPortrait = window.matchMedia("(orientation:portrait)").matches;
if(isPortrait)
{
  alert("Please view this page in landscape orientation for optimal experience ");
}