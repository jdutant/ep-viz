.PHONY: help
help:
	@echo "See Makefile for targets."

.PHONY: preview
preview:
	@quarto preview

.PHONY: publish
publish:
	@quarto publish gh-pages
