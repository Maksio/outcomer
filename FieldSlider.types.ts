// FieldSlider.types.ts
export interface FieldSliderProps {
  /** Текущее значение слайдера */
  value: number;
  /** Обработчик изменения значения */
  onChange: (value: number) => void;
  /** Минимальное значение */
  min?: number;
  /** Максимальное значение */
  max?: number;
  /** Шаг изменения */
  step?: number;
  /** Отключено ли поле */
  disabled?: boolean;
  /** Дополнительный CSS класс */
  className?: string;
  /** Метка поля */
  label?: string;
  /** Показывать ли текущее значение рядом или внутри */
  showValue?: boolean;
}
