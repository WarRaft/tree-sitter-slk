module.exports = grammar({
    name: 'slk',

    rules: {
        // Корневое правило — это обязательное требование
        source_file: $ => repeat($._statement),

        _statement: $ => choice(
            $.hello_statement,
            $.identifier
        ),

        hello_statement: $ => seq('hello', $.identifier),

        identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    }
});
