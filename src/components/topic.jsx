var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function()
  {
    return {
      images: []
    }
  },
  componentWillMount: function()
  {
    console.log("topic.componentWillMount()");
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps)
  {
    console.log("topic.componentWillReceiveProps()");
    Actions.getImages(nextProps.params.id);
  },
  render: function()
  {
    console.log("topic.render()");
    return (
      <div className="topic">
        {this.renderImages()}
      </div>
    );
  },
  renderImages: function()
  {
    console.log("topic.renderImages() - image count: "+ this.state.images.length);
    console.log(this.state.images.splice(0, 20).map(function(image)
    {
      return image.id;
    }));
    return this.state.images.splice(0, 20).map(function(image)
    {
      return (
        <ImagePreview key={image.id} {...image} />
      );
    });
  },
  onChange: function(event, images)
  {
    console.log("topic.onChange()");
    this.setState({
      images: images
    });
  }
});
