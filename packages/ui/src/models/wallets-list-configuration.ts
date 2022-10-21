import { UiWallet } from 'src/app/models/ui-wallet';

export type WalletsListConfiguration =
    | WalletsListConfigurationExplicit
    | WalletsListConfigurationImplicit;

export type WalletsListConfigurationExplicit = {
    wallets: (string | UiWallet)[];
};

export type WalletsListConfigurationImplicit = {
    excludeWallets?: string[];
    includeWallets?: UiWallet[];
};