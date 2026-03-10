import AlertCircle from '../icons/alert-circle.svg?react';

interface Props {
  onRetry: () => void;
}

export function ErrorState({ onRetry }: Props) {
  return (
    <div className="text-center py-20 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mb-4">
        <AlertCircle className="w-6 h-6 text-red-400" />
      </div>
      <p className="text-[var(--color-ink)] font-medium">Не удалось загрузить данные</p>
      <p className="text-sm text-[var(--color-ink-tertiary)] mt-1">
        Проверьте подключение и попробуйте снова
      </p>
      <button
        onClick={onRetry}
        className="mt-4 px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-[0_1px_3px_rgba(67,56,202,0.3)] transition-all duration-150"
      >
        Попробовать снова
      </button>
    </div>
  );
}
