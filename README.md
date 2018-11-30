# zos-truffle-merge

A handy utility to merge [Zeppelin OS](https://zeppelinos.org/) deployed contract addresses back into [Truffle](https://truffleframework.com/) build artifacts.

## Usage

The command will merge all of the addresses in the given zos network json file into the truffle artifacts in `build/contracts`.

```bash
Usage: zos-truffle-merge [options] <zos network json file>

Options:
  -n, --network [networkId]  Set network id
  -h, --help                 output usage information
```

## Todo

- Make Truffle build artifacts directory configurable.
