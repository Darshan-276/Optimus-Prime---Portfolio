interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 bg-obsidian flex items-center justify-center">
      <button onClick={onComplete} className="text-hud font-display">
        Click to enter
      </button>
    </div>
  );
}