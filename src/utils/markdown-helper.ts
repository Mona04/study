/**
 * script 에 string 으로 넣을 용도라서 풀어서 적었다.
 * https://stackoverflow.com/questions/44661707/addeventlistener-vs-onclick
 * https://stackoverflow.com/questions/18247289/what-is-the-difference-between-queryselectorall-and-getelementsbytagname
 */
function copyButtonScript() {
  console.log("우르을이링ㄴㄻㄴㅇ리")
  if(!document) return;
  
  const titlebars = document.querySelectorAll("[data-rehype-pretty-code-title]");
  for (const titlebar of titlebars)
  {
    var buttons = titlebar.getElementsByTagName("button");
    for(const button of buttons)
    {
      button.addEventListener('click', function(){
        if(navigator.clipboard)
        {
          var code = titlebar.getAttribute('data-code');
          if(code != null)
          {
            navigator.clipboard.writeText(code);
            button.setAttribute("checked", "true");
          }
          setTimeout(() => {
            button.removeAttribute("checked");
          }, 2000);
        }
      });
    }
  }
}
  
/**
 * 본문에서 titlebar class 를 찾아서 copybutton 을 추가해주는 스크립트
 *   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
 */
export const CopyButtonScript = `
  (function() {
    ${copyButtonScript.toString().replace(/(\/\*)[^(\*\/)]*(\*\/)/g,'')}
    copyButtonScript();
  })()
`;