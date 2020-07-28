import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      grey: string
    }
    spacing: {
      paddingX: string
      paddingTopHeroY: string
      paddingTopY: string
      paddingBottomY: string
  
      //top level paddings
      //tablet
      tabletPaddingX: string
      tabletPaddingY: string
  
      //top level paddings
      //laptop
      laptopPaddingX: string
      laptopPaddingY: string
  
      //component spacing
      padding12: string
      padding13: string
      padding16: string
      padding22: string
      padding28: string
      padding30: string
      padding32: string
      padding36: string
      padding48: string
  
    }
  }
}
