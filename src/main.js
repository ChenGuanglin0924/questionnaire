import { createApp } from "vue";
import App from "./App.vue";
import {
  Grid,
  GridItem,
  Image as VanImage,
  RadioGroup,
  Radio,
  Field,
  Form,
  Button,
  Skeleton,
  Empty,
  Toast,
  Loading,
  Icon
} from "vant";

const app = createApp(App);
app.use(Grid);
app.use(GridItem);
app.use(VanImage);
app.use(RadioGroup);
app.use(Radio);
app.use(Field);
app.use(Form);
app.use(Button);
app.use(Skeleton);
app.use(Empty);
app.use(Toast);
app.use(Loading);
app.use(Icon);

app.mount("#app");
