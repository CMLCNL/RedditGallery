
<div align="center">
  <img
    src="./src/constants/files/Logo.png"
    alt="Preview Image"
    width="200"
  />
  <p>
    <h3>
      <b>
        Reddit Gallery
      </b>
    </h3>
  </p>
  <br/>
</div>

# Browse Reddit in gallery mode

#### Information

- Type the username you want and see the posts of the user listed on the top.
- Go to the detail of the post.
- Find out how to use redux and redux-saga in this project.
- The application has been made enjoyable to use with various animations.
- It was coded with fully functional component.

## **Features**
|  iOS Gif |  Android Gif | iOS  | Android  |
|---|---|---|---|
| <img height=400 width=200  src="./examples/ios.gif" />  |  <img height=400 width=200   src="./examples/android.gif" /> | <img height=400 width=200   src="./examples/ios-1.png" />  | <img width=200 height=400 src="./examples/androdi-1.png" />  |
|  You can search. | You can review the details of any post. | You can use it on iOS.  | You can use it on Android.  |

<details>
<summary><strong> USEFULL GIT COMMANDS </strong></summary>
  
* git status = See changes
* git branch = See branches in your computer (branch you are working on is green)
* git branch "X" = Create a branch "X" in your computer
* git checkout -b "X" -> Create and Switch to branch "X"
* git switch "X" -> Switch to branch "X".
* git pull origin "Y" -> Brings changes from branch "Y" to the current branch you are working on
* git add . = Add all changes in code to stage
* git status = See all changes (stages are green, others are red)
* git commit -m "Fixing TopHeaderComponent" = Adding a commit message
* git push origin "X" = Pushing to branch "X"
* git reset HEAD~1 = Reset your local git commit
  
</details>

# Installation
```
yarn
yarn go
yarn ios
yarn android

```
## Icons Usage
```
import * as Icons from '@src/constants/Icons'

let RedditIcon = Icons['reddit']

//In your component use:

<RedditIcon width={wp(20)} fill={'red'} />
```


## Redux Usage
```
....

const dispatch = useDispatch();

const {homeData} = useSelector(state=>state.home);

...

dispatch(getHomeData(model));
```
- For Saga, please check the redux folder in the project.

```
const responseData = yield call(getHomeDataCall, data);

yield put({
      type: GET_HOME_DATA_SUCCESS,
      data: responseData?.data?.children,
});
```
## Responsive Screen Usage

```
import {hp, wp} from '@src/constants/Dimensions';

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(5), // For height
    marginLeft: wp(5), // For width
  },
});
```


## React Navigation Native Usage

```

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer
      onReady={() => {
        console.log('onReady');
      }}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false, headerTransparent: true}}
          name={SCREENS.HomeScreen}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false, headerTransparent: true}}
          name={SCREENS.DetailScreen}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

...

//for navigate screen
navigation.navigate(SCREENS.HomeScreen);
```

## Detox App Tests Usage

```
yarn add global detox-cli

//for iOS
detox test -c ios
```
