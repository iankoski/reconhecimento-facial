import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ImageUploader from './component/index.js';
import { rainbow } from 'react-syntax-highlighter/styles/hljs';

const steps = {
    one: `npm install --save react-images-upload`,
    two: `import React from 'react';
import ImageUploader from 'react-images-upload';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Escolher Imagens'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}`
}


export default class App extends React.PureComponent {
    render() {
        return (
            <div className="page">
                <h1>Upload de imagens para reconhecimento facial com Watson</h1>               
                
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                               withPreview={true} />                
                
            </div>
        );
    }
}
