import { renderHook, act } from '@testing-library/react';
import { useToast, toast } from './use-toast';

describe('useToast', () => {
  beforeEach(() => {
    // Reset the state before each test
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.dismiss();
    });
  });

  it('should add a toast', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({
        title: 'Test Title',
        description: 'Test Description',
      });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Test Title');
    expect(result.current.toasts[0].description).toBe('Test Description');
    expect(result.current.toasts[0].open).toBe(true);
  });

  it('should respect the toast limit', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({ title: 'First Toast' });
      result.current.toast({ title: 'Second Toast' });
      result.current.toast({ title: 'Third Toast' });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Third Toast');
  });

  it('should dismiss a toast', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({ title: 'Test Toast' });
    });

    const toastId = result.current.toasts[0].id;
    
    act(() => {
      result.current.dismiss(toastId);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should dismiss all toasts', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({ title: 'First Toast' });
      result.current.toast({ title: 'Second Toast' });
    });

    act(() => {
      result.current.dismiss();
    });

    // Check that all toasts are marked as closed
    expect(result.current.toasts.every(t => !t.open)).toBe(true);
  });

  it('should update a toast', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({ title: 'Original Title' });
    });

    const toastId = result.current.toasts[0].id;
    
    act(() => {
      result.current.toast({ title: 'Updated Title' });
    });

    expect(result.current.toasts[0].title).toBe('Updated Title');
  });

  it('should generate unique IDs for toasts', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({ title: 'First Toast' });
      result.current.toast({ title: 'Second Toast' });
    });

    const ids = result.current.toasts.map(t => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  // Performance Tests
  describe('performance', () => {
    it('should maintain stable reference to toast function', () => {
      const { result, rerender } = renderHook(() => useToast());
      
      const initialToast = result.current.toast;
      
      // Rerender the hook multiple times
      rerender();
      rerender();
      rerender();
      
      // Toast function should maintain the same reference
      expect(result.current.toast).toBe(initialToast);
    });

    it('should efficiently handle multiple rapid toast updates', () => {
      const { result } = renderHook(() => useToast());
      const startTime = performance.now();
      
      // Add multiple toasts in rapid succession
      act(() => {
        for (let i = 0; i < 100; i++) {
          result.current.toast({ title: `Toast ${i}` });
        }
      });
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Adding 100 toasts should take less than 100ms
      // This is a reasonable threshold for modern browsers
      expect(duration).toBeLessThan(100);
      
      // Should still respect the toast limit
      expect(result.current.toasts).toHaveLength(1);
    });

    it('should efficiently handle multiple rapid toast dismissals', () => {
      const { result } = renderHook(() => useToast());
      
      // Add some toasts first
      act(() => {
        result.current.toast({ title: 'Toast 1' });
        result.current.toast({ title: 'Toast 2' });
        result.current.toast({ title: 'Toast 3' });
      });
      
      const startTime = performance.now();
      
      // Dismiss all toasts rapidly
      act(() => {
        result.current.dismiss();
      });
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Dismissing all toasts should take less than 50ms
      expect(duration).toBeLessThan(50);
      
      // All toasts should be marked as closed
      expect(result.current.toasts.every(t => !t.open)).toBe(true);
    });
  });
}); 