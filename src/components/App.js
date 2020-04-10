import { base } from '@theme-ui/presets';
import { Button, ThemeProvider } from 'theme-ui';

const App = () => {
  return (
    <ThemeProvider theme={base}>
      <Button>Hello World!</Button>
    </ThemeProvider>
  );
};

export default App;
