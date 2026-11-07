/**
 * Suite de Testes TDD com Playwright para Validação da Landing Page
 */
import { test, expect } from '@playwright/test';

test.describe('Soares Instalações Elétricas - Testes de Conversão e Layout', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Deve possuir a tag html com idioma pt-BR e título correto', async ({ page }) => {
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('pt-BR');
    await expect(page).toHaveTitle(/Soares Instalações Elétricas/);
  });

  test('Header e menu mobile devem abrir e fechar corretamente', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const toggleBtn = page.locator('#menu-toggle');
    const navMenu = page.locator('#nav-menu');

    await expect(toggleBtn).toBeVisible();
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(navMenu).toHaveClass(/active/);

    // Clica em um link e fecha
    const serviceLink = navMenu.locator('a[href="#servicos"]');
    await serviceLink.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });

  test('Botão flutuante de WhatsApp deve estar presente e com link correto', async ({ page }) => {
    const floatBtn = page.locator('.whatsapp-float');
    await expect(floatBtn).toBeVisible();
    const href = await floatBtn.getAttribute('href');
    expect(href).toContain('5547991054858');
    expect(href).toContain('text=');
  });

  test('Não deve haver overflow horizontal em telas pequenas', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('Perguntas do FAQ (details/summary) devem expandir no clique', async ({ page }) => {
    const firstFaq = page.locator('details.faq-item').first();
    const summary = firstFaq.locator('summary');
    await expect(firstFaq).not.toHaveAttribute('open', '');
    await summary.click();
    await expect(firstFaq).toHaveAttribute('open', '');
  });
});