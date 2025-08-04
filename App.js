// const heading = React.createElement('h1',{id:'heading'},'Namaste React');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading = React.createElement('div',{id:'container'},
        [React.createElement('div', {id:'child'}, 

        [React.createElement('h1', {id:'value1'}, 'hellow'),
        React.createElement('h2', {id:'value2'}, 'Namaste')]),
        
        React.createElement('div', {id:'child'},
        React.createElement('h1', {id:'heading'}, 'Namaste React')
        )]
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);