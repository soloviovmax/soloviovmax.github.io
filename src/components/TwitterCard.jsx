import React, { Component } from 'react';
import './TwitterCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns'

export default class TwitterCard extends Component {
   render() {
      let { card, save, remove, isSaved } = this.props;
      if (!card) {
         card = {
            user: {
               name: 'Max Soloviov',
               screen_name: 'maxsoloviov',
               profile_image_url: '',
            },
            entities: {},
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
            created_at: Date.now(),
            id_str: '123123123123123',
         }
      }

      const { user, text, created_at, entities, id_str } = card;
      const { name, screen_name, profile_image_url } = user;

      const userUrl = `https://twitter.com/${screen_name}`;
      return (
         <Card className="card">
            <CardHeader
               avatar={
                  <Avatar aria-label={name}>
                     <img src={profile_image_url} alt={name} />
                  </Avatar>
               }
               title={<div>{name} - <a href={userUrl} target="_blank" rel="noopener noreferrer nofollow">@{screen_name}</a></div>}
               subheader={format(created_at, 'MMMM DD YYYY')}
            />
            <CardContent className="card-content">
               {
                  entities && entities.media && entities.media.map(({ media_url, type }) => {
                     if (type !== 'photo') return null;
                     return <img src={media_url} alt={text} className="card-img" key={media_url} />
                  })
               }
               <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="card-text"
               >
                  {text}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small" color="primary" onClick={() => isSaved ? remove(card._id) : save(card)}>
                  {isSaved ? 'Remove' : 'Save'}
               </Button>
               <a
                  href={`${userUrl}/status/${id_str}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="card-button-link"
               >
                  <Button size="small" color="primary">
                     Open in twitter
                  </Button>
               </a>
            </CardActions>
         </Card>
      )
   }
}
