class HomeScene extends Component {
  constructor(props) {
      super(props)
      //Be sure to add this line, or the "this" in _onPress method will not reference to current object
      this._onPress = this._onPress.bind(this)
  }

  render() {
    return (
      <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
        <TouchableHighlight onPress={this._onPress}>
          <Text>Touch me to transform "First touch" to next scene.</Text>
        </TouchableHighlight>
      </View>
    )
  }
  _onPress() {
    this.props.navigator.push({
      title: 'First touch scene',
      component: FirstTouchScene,
      passProps: {showLable: "First touch"}
    })
  }
}
