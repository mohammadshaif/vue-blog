const ProjectData=[
    {   que:'What is Fluid Design',
        ans:"Fluid Design means different sections of the site are defined relatively (eg, an element is 50% of the page width). No matter what browser you're using: Smartphone, Tablet, Desktop, the site will look  the same.",
    },
     {   que:'What is Vue.js',
        ans:"Vue.js is a JavaScript framework. It is used to build single page applications and user interfaces.",
    },
    {   que:'How to install vue js on local machine by Yarn',
        ans:"To install vue js on a local machine, you first need to have a node installed on the local computer. Then cli needs to be installed. yarn global add @ vue / cli. After vue create project-name.",
    },
    {   que:'Which extension is required in vs code for vue js',
        ans:"vue js requires an extension called Vetur in the vs code. By which it is very easy to write the code of vue js in vs code editor.",
    },
    {   que:'Rules for writing html, css, js in the component of vue js',
        ans:"The html code is written in the component of vue js inside <template>. And the css code is written inside the <style> tag. JavaScript code is written inside <script>.",
    },
     {   que:'What to do if the css of the component in vue js is used only in that component',
        ans:"The css of the component in vue js has to be scoped inside the style tag to be used only in that component. <style scoped>.",
    },
    {   que:'What do you know about vue js router',
        ans:"To use a vue js router, first type 'vue add router' in the command line. After that two new folders named router and views will be created in the project. At the same time <router-view /> will be created to view the components of the router in app vue.",
    },
     {   que:'What to do to load data in vue js',
        ans:"To load and display data in vue js, first install 'yarn add axios'. Then you have to import the component in which you want to see it. Then you have to load the data by exios .get.",
    },
    {   que:'How to send data from one component to child component in vue js',
        ans:"To send data from one component to the child component in vue js, call the child component inside the template of the parent component <ChildComponent v-bind: data = 'data' />. This is how data can be sent to the child component.",
    },
     {   que:'How to show data in child component in vue js',
        ans:"To show data in child component in vue js, export 'props: [' data ']' to show where you need to show <div v-for = 'data of data': key = 'data.id'> I can.",
    },
    
    


]
export default ProjectData;