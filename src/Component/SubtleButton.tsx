import "./SubtleButton.css"
export interface ISubtleButtonProps {
    children: React.ReactNode
    rounder: string
}

export function SubtleButton({ children, rounder }: ISubtleButtonProps) {
    return (
        <div className={`subtle-button px-3 hover:bg-white/50 active:bg-white/80  select-none cursor-pointer ${rounder}`}>
            {children}
        </div>
    )
}