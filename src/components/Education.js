import React, { Component } from 'react';
import '../styles/Education.scss';

const educationInfo = [
  {
        year: '1900',
        infoTitle: 'I was born in Katowice',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
    },
    {
        year: '2005',
        infoTitle: 'Secondary school specializing in artistic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptaibus.'
      },
      {
        year: '2009',
        infoTitle: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repllat.'
      },
      {
        year: '2012',
        infoTitle: 'Second level graduation in Graghic Design',
        content: 'Ducimus, aliquam tempore autem itaque et accusantium!'
      },
];
     
export default class Education extends Component {
    render() {
        return (
            <div className = "educationInfo">
                <h2 className='title'>EDUCATION</h2>
                { educationInfo.map((item) => (
                    <div className = "myItem" key = {item}>
                        <div className = "year">{item.year}</div>
                        <div className = "content">
                            <div className = 'infoTitle'>{item.infoTitle}</div>
                             <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}