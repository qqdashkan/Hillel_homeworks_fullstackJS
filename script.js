function createCurrencyConverter(rate) {
    function toLocalCurrency(currency) {
        return parseInt(currency) * rate;
    }

    function toForeignCurrency(currency) {
        return parseInt(currency) / rate;
    }

    return {
        toLocalCurrency,
        toForeignCurrency
    }
}

const converter = createCurrencyConverter(0.89);

console.log(new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    converter.toLocalCurrency("100 USD"),
  ),
);
console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    converter.toForeignCurrency("89 EUR"),
  ),
);