import { uiMap } from '../const/uiMap';
import { type ComponentProps, type ComponentType } from "react";
import { SduType } from "../type/sduType";
import { getDesignAndThemeClass } from './getDesignAndThemeClass';

export function RenderSdu({
  ui,
}: {
  ui: Array<SduType | string>
}) {

  return <>{
    ui.map((ui, i: number) => {
      if(typeof ui === 'string') return ui
      const designAndThemeClassName = getDesignAndThemeClass(ui.meta)

      const variant = ui.type.split('-')[0];
      const component = ui.type.split('-')[1];

      const variantMap = uiMap[variant as keyof typeof uiMap];
      const Cmp = variantMap[component as keyof typeof variantMap] as ComponentType<any>;
      
      return <Cmp
        key={i}
        {...(ui.props as ComponentProps<typeof Cmp>)}
        className={`${designAndThemeClassName} ${(ui.props as any)?.className ?? ''}`}
      >
        <RenderSdu ui={ui?.children ?? []}/>
      </Cmp>
    })
  }</>
}
