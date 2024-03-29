import Video from 'react-native-video';


<Video 
        source={{uri: "background"}}  
        ref={(ref) => {
         this.player = ref
        }}                                     
        onBuffer={this.onBuffer}                
        onError={this.videoError}               
        style={styles.backgroundVideo} />

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});