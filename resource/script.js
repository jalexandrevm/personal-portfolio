function moreInfo(event) {
  const techDescElem = document.getElementById('tech-desc');
  if (techDescElem.style.display === 'none') {
    techDescElem.style.display = 'block';
    let descAditional = '';
    switch (this.id) {
      case 'tech-html':
        descAditional = `Advanced understanding of html5. Use of semantic elements and application of best practices for accessibility based on the a11y standard and ARIA`;
        break;
      case 'tech-css':
        descAditional = `Advanced understanding of css. Styles using selectors with element's name, their classes and id's and combinations of them. Media queries for many kinds of breakpoint sizes`;
        break;
      case 'tech-bs':
        descAditional = `Advanced understanding of bootstrap. Styles using bootstrap classes directly in elements. Media queries for many kinds of breakpoint sizes just using classes.`;
        break;
      case 'tech-js':
        descAditional = `Advanced understanding of js. Essencial knowledge of logic using it. Conditional statements with if/else if/else. Looping with for classic and enhanced, while and do/while. Understanding of recursive use. Declarative functions, arrow and anonimous too. Array, Object, key-value understanding. Creation and use of complex data structure. And lot more.`;
        break;
      case 'tech-react':
        descAditional = `Basic understanding of react. Use of create-react-app for static react apps. Knowledge of components and JSX elements. Knowing how to use redux with react with all their actions, reducers and provider/connect interfaces.`;
        break;
      case 'tech-git':
        descAditional = `Advanced understanding of git. Essential comamnds to work like init, status, add, commit, remote, push and pull along with others options like checkout, reset, stash. The Use of branchs to work in teams to push new codes for merging it to main code.`;
        break;
      case 'tech-github':
        descAditional = `Advanced understanding of github. Creation of repository to get code online and shared with friends, teammates and the world. Use of pull requests to get feedback of colaborators to review the code before merging them to the main branch. Publishing code with GitHub Pages for static projects. Some understanding of GitHub Actions to trigger some tests on code coming from certain branch.`;
        break;
      case 'tech-gitlab':
        descAditional = `Basic understanding of gitlab. Started using it but when I saw that the core ideai looked like GitHub I quited using it. I kept using github but I know I could use it if I needed to.`;
        break;
      case 'tech-figma':
        descAditional = `Basic understanding of figma. Started using for some wireframes but didn't get too deep. As I know that it has more use for documentation for now I'm using just to learn about wireframe and prototyping.`;
        break;
      case 'tech-npm':
        descAditional = `Advanced understanding of npm. As in Linux, NPM is a tool for installing, removing or updating packages in projects using Node. It still manages dependencies of already installed packages.`;
        break;
      case 'tech-node':
        descAditional = `Advanced understanding of node. Being a runtime enviroment for JavaScript code, it's really important to kown how to install it. Some features are similar to the use of Python.`;
        break;
      case 'tech-terminal':
        descAditional = `Advanced understanding of terminal. Knowing how to use the terminal is a consequence of learning how to use node and its tool npm. Using MS-DOS from old times and Linux for python programing helped a lot too.`;
        break;
      default:
        break;
    }
    techDescElem.innerHTML = descAditional;
  } else {
    techDescElem.style.display = 'none';
  }
}

const techIcons = document.getElementsByClassName('tech-icons');
Array.prototype.forEach.call(techIcons, (icon) => {
  icon.onclick = moreInfo;
});
