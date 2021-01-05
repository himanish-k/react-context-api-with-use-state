import { Component } from 'react';
import MyContext from './MyContext';

export default class AClassComponent extends Component {
    static contextType = MyContext;

    render() {
        return <p style={{color: this.context.color}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus consequat leo vitae diam mollis, ac condimentum ligula mollis.
            Maecenas et rhoncus sem.
            Praesent pellentesque, quam sed scelerisque pretium, lorem ante sodales ex, ornare rutrum nunc dolor quis tortor.
            Donec a orci a risus posuere scelerisque.
            Cras iaculis ante tincidunt, tempor urna a, aliquet lectus.
            Aliquam erat volutpat.
            Proin hendrerit odio sit amet tellus congue ultrices.
            Duis vitae risus maximus velit iaculis porta.
            Morbi lacinia imperdiet nisl a bibendum.
            Sed id odio sed arcu molestie laoreet.
            Aliquam erat volutpat.
            Fusce porta ac libero eu tincidunt.
            Aenean tincidunt ornare metus ac aliquam.
        </p>
    }
}