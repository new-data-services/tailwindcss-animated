interface AnimatedPluginConfig {
    theme?: {
        extend?: Record<string, unknown>
    } & Record<string, unknown>
    [key: string]: unknown
}

interface AnimatedPlugin {
    // any avoids the v3/v4 PluginAPI shape mismatch
    handler: (api: any) => void
    config?: AnimatedPluginConfig
}

declare const plugin: AnimatedPlugin

export = plugin

// v3-only theme key autocomplete, no-op on v4
declare module 'tailwindcss/types/config' {
    interface ThemeConfig {
        animationDelay?: Record<string, string>
        animationDuration?: Record<string, string>
        animationTimingFunction?: Record<string, string>
        animationIteration?: Record<string, string>
    }
}
