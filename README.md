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

For example:

```
$ zos-truffle-merge -n 3 zos.ropsten.json
```

Will merge the deployed contract addresses from Ropsten into the Truffle artifacts under network id '3' 

## Todo

- Make Truffle build artifacts directory configurable.
